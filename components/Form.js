import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setDomainList, setLoading } from "@store/actions";
import Search from "@ui/icons/Search";
import Circle from "@ui/icons/Circle";

export default function Form() {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const checkDomains = async ({ domain }) => {
		dispatch(setLoading(true));
		await axios
			.post("/api/domain/check", { domain })
			.then((res) => {
				dispatch(setDomainList(res.data));
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				dispatch(setLoading(false));
			});
	};
	const options = {
		required: "Domain name is required.",
		validate: (value) => {
			const isValid = !/[^a-zA-Z0-9]/.test(value)
			if(!isValid) return "Domain name is not valid."
			return true
		},
	}
	const validateDomain = 
	return (
		<div className="mb-4">
			<p className="animate-bounce text-xs text-red-500 font-medium mb-1 pl-2">{errors.domain?.message}</p>
			<form
				onSubmit={handleSubmit(checkDomains)}
				className="relative w-full"
			>
				<input
					type="text"
					name="domain"
					placeholder="Domain Name"
					className="py-3 px-2 w-full rounded-lg text-zinc-900 focus:outline-none"
					{...register("domain", options)}
				/>
				<button
					type="submit"
					className="absolute top-1 right-1 text-zinc-100 bg-zinc-900 p-2 rounded-lg"
				>
					{loading ? <Circle /> : <Search />}
				</button>
			</form>
		</div>
	);
}
