import React from "react";
import Xmark from "@ui/icons/Xmark";
import Check from "@ui/icons/Check";

export default function Domain({domain,exists}) {
	return (
		<div
			className="bg-zinc-800 mb-2 p-2.5 rounded-lg flex flex-row items-center justify-between"
		>
			<h2 className={`text-lg font-medium ${exists && "text-white/50"}`}>
				{domain}
			</h2>
			<span
				className={`p-0.5 rounded-full ${
					exists ? "bg-amber-900" : "bg-lime-600"
				}`}
			>
				{exists ? <Xmark /> : <Check />}
			</span>
		</div>
	);
}
