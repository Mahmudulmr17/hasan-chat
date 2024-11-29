import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@lib/auth";
import type { FormEvent } from "react";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@lib/firebase";

export function Register() {
	const searchParams = new URLSearchParams(window.location.search);
	const { signUp } = useAuth();
	const naviagte = useNavigate();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		displayName: "",
		email: "",
		password: "",
	});

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		try {
			setLoading(true);
			const res = await signUp(formData.email, formData.password);
			await updateProfile(res.user, {
				displayName: formData.displayName,
			});
			await setDoc(doc(db, "users", res.user.uid), {
				uid: res.user.uid,
				displayName: formData.displayName,
				email: formData.email,
			});
			await setDoc(doc(db, "userChats", res.user.uid), {});
			naviagte("/");
		} catch (error) {
			console.log(error);
			setError(true);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="bg-[#a7bcff] h-screen flex items-center justify-center">
			<div className="px-16 py-5 bg-white rounded-lg flex flex-col gap-2.5 items-center w-full max-w-md">
				<span className="text-[#585b8d] font-bold text-2xl">Chat App</span>
				<span className="text-[#585b8d] text-sm ">Register</span>
				<form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Display Name"
						className="p-4 border-b border-[#a7bcff] placeholder:opacity-85 outline-none"
						id="displayName"
						name="displayName"
						value={formData.displayName}
						onChange={handleChange}
						required
					/>
					<input
						type="email"
						placeholder="Email"
						className="p-4 border-b border-[#a7bcff] placeholder:opacity-85 outline-none"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
					<input
						type="password"
						placeholder="Password"
						className="p-4 border-b border-[#a7bcff] placeholder:opacity-85 outline-none"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
						minLength={6}
					/>

					{error && (
						<p className="text-sm text-red-500 font-medium">
							Something went wrong
						</p>
					)}

					<button
						type="submit"
						className="p-2.5 text-white bg-[#7b96ec] font-semibold"
						disabled={loading}
					>
						{loading ? "Loading..." : "Sign up"}
					</button>
				</form>
				<p className="text-[#585b8d] text-sm mt-2.5">
					You do have an account?{" "}
					<Link
						to={`/auth/login?next=${searchParams.get("next") ?? "/"}`}
						className="font-semibold"
					>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}
