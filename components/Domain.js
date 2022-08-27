import React from "react";
import Xmark from "@ui/icons/Xmark";
import Check from "@ui/icons/Check";
import clsx from "clsx";

export default function Domain({ domain, exists }) {
	return (
		<div className="bg-zinc-800 mb-2 p-2.5 rounded-lg flex flex-row items-center justify-between">
			<h2
				className={clsx(
					exists && "text-white/50",
					"text-lg font-medium"
				)}
			>
				{domain}
			</h2>
			<span
				className={clsx(
					exists ? "bg-rose-800" : "bg-green-800",
					"p-0.5 rounded-full"
				)}
			>
				{exists ? <Xmark /> : <Check />}
			</span>
		</div>
	);
}
