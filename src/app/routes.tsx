import { createBrowserRouter } from "react-router";
import { Login, Register } from "./auth";
import { Home } from "./home";

export const router = createBrowserRouter([
	{
		path: "/",
		index: true,
		element: <Home />,
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
