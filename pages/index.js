import Head from "next/head";
import Form from "@ui/Form";
import Header from "@ui/Header";
import DomainList from "@ui/DomainList";
import SocialBar from "@ui/SocialBar";
import Seo from "@ui/Seo"

export default function Home() {
	return (
		<>
			<Seo />
			<div className="text-zinc-100 conatiner mx-auto px-4 md:px-32">
				<Header />
				<Form />
				<DomainList />
			</div>
			<SocialBar />
		</>
	);
}
