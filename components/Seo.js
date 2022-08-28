import { NextSeo } from "next-seo";

export default function Seo() {
	return (
		<NextSeo
			title="Domain Name Verifier Tool"
			description="Simple and quick tool to check existence of domain names before the purchase process"
			canonical="https://domaincheck.vercel.app/"
			openGraph={{
				url: "https://domaincheck.vercel.app",
				title: "Domain Name Verifier Tool",
				description: "Simple and quick tool to check existence of domain names before the purchase process",
				images: [
					{
						url: "https://www.example.ie/og-image-01.jpg",
						width: 800,
						height: 600,
						alt: "Og Image Alt",
						type: "image/jpeg",
					},
					{
						url: "https://www.example.ie/og-image-02.jpg",
						width: 900,
						height: 800,
						alt: "Og Image Alt Second",
						type: "image/jpeg",
					},
					{ url: "https://www.example.ie/og-image-03.jpg" },
					{ url: "https://www.example.ie/og-image-04.jpg" },
				],
				site_name: "Domain Name Verifier Tool",
			}}
			twitter={{
				handle: "@little_mahmoud",
				site: "@little_mahmoud",
				cardType: "summary_large_image",
			}}
		/>
	);
}
