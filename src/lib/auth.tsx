import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	type User,
	getAuth,
} from "firebase/auth";
import { firebaseApp } from "@lib/firebase";
import { Navigate } from "react-router";

interface AuthContextType {
	user: User | null;
	signIn: (email: string, password: string) => Promise<void>;
	signUp: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	loading: boolean;
}

const authContext = createContext<AuthContextType>({} as AuthContextType);
const auth = getAuth(firebaseApp);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const signIn = async (email: string, password: string) => {
		await signInWithEmailAndPassword(auth, email, password);
	};

	const signUp = async (email: string, password: string) => {
		await createUserWithEmailAndPassword(auth, email, password);
	};

	const logout = async () => {
		await signOut(auth);
		setUser(null);
	};

	const value = {
		user,
		signIn,
		signUp,
		logout,
		loading,
	};

	return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

// eslint-disable-next-line
export function useAuth() {
	const context = useContext(authContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}

export function ProtectedRoute({ children }: { children: ReactNode }) {
	const { user, loading } = useAuth();

	if (loading) {
		return <div>loading</div>;
	}

	if (!user) {
		return <Navigate to={`/auth/login?next=${window.location.pathname}`} />;
	}
	return children;
}
