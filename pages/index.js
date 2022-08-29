import Head from "next/head";
import Form from "@ui/Form";
import Header from "@ui/Header";
import List from "@ui/domain/list";
import SocialBar from "@ui/socialbar/list";
import Meta from "@ui/seo/meta"
import Article from "@ui/article"

export default function Home() {
	return (
		<>
			<Meta />
			<main className="text-zinc-100 conatiner mx-auto px-4 md:px-32">
				<Header />
				<Form />
				<List />
				<Article/>
			</main>
			<SocialBar />
		</>
	);
}
