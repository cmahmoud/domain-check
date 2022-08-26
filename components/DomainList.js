import React from "react";
import { useSelector } from "react-redux";
import Xmark from "@ui/icons/Xmark";
import Check from "@ui/icons/Check";
import Skeleton from "@ui/Skeleton";

export default function DomainList() {
	const domains = useSelector((state) => state.domainList);
	const loading = useSelector((state) => state.loading);
	return (
		<div className="list">
			{loading ? (
				<Skeleton />
			) : (
				domains?.map(({ domain, exists }, idx) => {
					return (
						<div
							key={idx}
							className="bg-zinc-800 mb-2 p-2.5 rounded-lg flex flex-row items-center justify-between"
						>
							<h2 className="text-lg font-medium">{domain}</h2>
							<span
								className={`p-0.5 rounded-full ${
									exists ? "bg-red-500" : "bg-green-600"
								}`}
							>
								{exists ? <Xmark /> : <Check />}
							</span>
						</div>
					);
				})
			)}
		</div>
	);
}
