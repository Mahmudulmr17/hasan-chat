import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "@components/auth";
import { Login, Register } from "./auth";
import { Home } from "./home";

export const router = createBrowserRouter([
	{
		path: "/",
		index: true,
		element: (
			<ProtectedRoute>
				<Home />
			</ProtectedRoute>
		),
	},
	{
		path: "/auth",
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
]);
