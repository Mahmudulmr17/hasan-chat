import { useState } from "react";
import { Link } from "react-router";
import type { FormEvent } from "react";

export function Login() {
	const searchParams = new URLSearchParams(window.location.search);

	const [formData, setFormData] = useState({
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

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		// Log the form data
		console.log(formData);
	}

	return (
		<div className="bg-[#a7bcff] h-screen flex items-center justify-center">
			<div className="px-16 py-5 bg-white rounded-lg flex flex-col gap-2.5 items-center w-full max-w-md">
				<span className="text-[#585b8d] font-bold text-2xl">Chat App</span>
				<span className="text-[#585b8d] text-sm ">Login</span>
				<form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
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

					<button
						type="submit"
						className="p-2.5 text-white bg-[#7b96ec] font-semibold"
					>
						Login
					</button>
				</form>
				<p className="text-[#585b8d] text-sm mt-2.5">
					Don't have an account?{" "}
					<Link
						to={`/auth/register?next=${searchParams.get("next") ?? "/"}`}
						className="font-semibold"
					>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
}
