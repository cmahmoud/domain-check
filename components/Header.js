import React from "react";

export default function Header() {
	return (
		<header className="mt-8 mb-4 py-4 flex flex-col">
			<h1 className="text-center text-3xl md:text-5xl font-semibold mb-1">Domain Name Verifier Tool</h1>
			<h3 className="text-center text-md md:text-2xl font-medium text-green-600">Simple and quick tool to check existence of domain names.</h3>
		</header>
	);
}
