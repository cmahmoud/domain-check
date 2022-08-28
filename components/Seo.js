import Head from "next/head";

export default function Seo() {
	return (
		<Head>
			<meta charset="UTF-8" />
			<meta name="language" content="EN" />
			<meta name="copyright" content="Domain Name Checker Tool" />
			<meta name="owner" content="Mahmoud Ibrahiam" />
			<meta name="reply-to" content="cmahmoudv@gmail.com" />
			<meta
				name="author"
				content="Mahmoud Ibrahiam, cmahmoudv@gmail.com"
			/>
			<meta name="url" content="https://domaincheck.vercel.app" />
			<meta name="viewport" content="width=device-width" />
			<title>Domain Name Checker Tool</title>
			<meta name="revisit-after" content="7 days" />
			<meta name="robots" content="index,follow" />
			<link rel="canonical" href="https://domaincheck.vercel.app/" />
			<meta
				name="keywords"
				content="domain, domain name, domain availability, domain buy, buy domain, website domain, domain check, domain checker, domain search, domain email"
			/>
			<meta
				name="description"
				content="Simple and quick tool to check existence of domain names before the purchase process"
			/>
			<meta name="og:title" content="Domain Name Checker Tool" />
			<meta name="og:type" content="website" />
			<meta name="og:url" content="https://domaincheck.vercel.app/" />
			<meta
				name="og:image"
				content="https://domaincheck.vercel.app/domain-name-check.png"
			/>
			<meta name="og:site_name" content="Domain Name Checker Tool" />
			<meta
				name="og:description"
				content="Simple and quick tool to check existence of domain names before the purchase process"
			/>
			<meta property="twitter:card" content="summary_large_image" />
			<meta
				property="twitter:url"
				content="https://domaincheck.vercel.app/"
			/>
			<meta
				property="twitter:title"
				content="Domain Name Verifier Tool"
			/>
			<meta
				property="twitter:description"
				content="Simple and quick tool to check existence of domain names before the purchase process"
			/>
			<meta
				property="twitter:image"
				content="https://domaincheck.vercel.app/domain-name-check.png"
			/>
		</Head>
	);
}
