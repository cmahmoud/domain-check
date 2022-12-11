import Form from "@ui/Form";
import Header from "@ui/Header";
import List from "@ui/domain/list";
import Meta from "@ui/seo/meta";
import Article from "@ui/article";
import Footer from "@ui/Footer";

export default function Home() {
    return (
        <>
            <Meta />
            <Header />
            <main className="text-zinc-100 conatiner mx-auto px-4 md:px-32">
                <Form />
                <List />
                <Article />
            </main>
            <Footer />
        </>
    );
}
