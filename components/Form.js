import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDomainList, setLoading } from "@store/actions";
import Search from "@ui/icons/Search"
import Circle from "@ui/icons/Circle"

export default function Form() {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);
	const checkDomains = async (e) => {
		e.preventDefault();
		dispatch(setLoading(true));
		await axios
			.post("/api/domain/check", { domain: e.target.domain.value })
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
	return (
		<form onSubmit={checkDomains} className="relative w-full mb-4">
			<input
				type="text"
				name="domain"
				placeholder="website"
				className="py-3 px-2 w-full rounded-lg text-zinc-900 focus:outline-none"
				required
			/>
			<button
				type="submit"
				className="absolute top-1 right-1 text-zinc-100 bg-zinc-900 p-2 rounded-lg"
			>
				{loading ? <Circle /> : <Search />}
			</button>
		</form>
	);
}
