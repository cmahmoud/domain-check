import React from "react";

export default function Header() {
	return (
		<header className="mt-8 mb-4 py-4 flex flex-col">
			<h1 className="text-center text-3xl md:text-5xl font-semibold">Domain Name Checker Tool</h1>
			<h3 className="hidden text-center text-md md:text-2xl font-medium text-rose-600">Simple and quick tool to check existence of domain names.</h3>
		</header>
	);
}
