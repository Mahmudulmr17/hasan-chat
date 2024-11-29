import { useState } from "react";
import { Link } from "react-router";
import { addAvatar } from "../../assets";
import type { FormEvent } from "react";

export function Register() {
	const searchParams = new URLSearchParams(window.location.search);

	const [formData, setFormData] = useState({
		displayName: "",
		email: "",
		password: "",
		file: null as File | null,
	});

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value, files } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: files ? files[0] : value,
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
					<input
						type="file"
						id="file"
						name="file"
						hidden
						onChange={handleChange}
					/>
					<label
						htmlFor="file"
						className="flex items-center gap-x-2 cursor-pointer"
					>
						<img src={addAvatar} alt="" className="size-10" />
						<span className="text-sm">Add an avatar</span>
					</label>
					<button
						type="submit"
						className="p-2.5 text-white bg-[#7b96ec] font-semibold"
					>
						Sign up
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
