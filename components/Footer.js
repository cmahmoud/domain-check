import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-zinc-800 py-4">
            <section className="container mx-auto px-4 md:px-24 flex items-center justify-between">
                <Link href="https://darker.vercel.app/" target="_blank">
                    <a className="font-semibold text-xl text-indigo-500">
                        Darker
                    </a>
                </Link>
                <span className="font-semibold text-xl">
                    Created by{" "}
                    <Link href="https://imahmoud.vercel.app/" target="_blank">
                        <a className="text-indigo-500">Mahmoud Ibrahiam</a>
                    </Link>
                </span>
            </section>
        </footer>
    );
}
