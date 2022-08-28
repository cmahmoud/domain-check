/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function TextForSeo() {
	return (
		<article className="text-zinc-100/75 mb-16 md:mb-4">
			<div className="flex flex-col gap-3 p-3 bg-zinc-800 mb-2 rounded-lg mb-3">
				<h2 className="text-center text-2xl mb-1 text-white font-bold">
					What is a domain name?
				</h2>
				<p>
					The Domain is the website address on the Internet, which is
					written in this way www.DomainName.com and has 3 main parts
					in its composition.
				</p>
				<p>
					In the past, before the idea of ​​​​the site name was
					invented, the addresses of the Internet sites were an IP
					number and it was written like this: 192.168.32.54
				</p>
				<p>
					But with the development in the use of the Internet, it has
					become very difficult for users to memorize the names of
					websites if they are written in this way.
				</p>
				<p>
					Therefore, it was developed to be easier, and a new type of
					server was invented, which is the Domain Server, which is
					responsible for replacing domain names with an IP number to
					make it easier for people to access websites.
				</p>
				<p>
					Consequently, this development of domain names led to a
					major boom in purchase requests and domain reservations from
					large companies to reach individuals due to the invention of
					the domain server.
				</p>
			</div>
			<div className="flex flex-col gap-3 p-3 bg-zinc-800 mb-2 rounded-lg">
				<h3 className="text-center text-2xl mb-1 text-white font-bold">
					How does the domain work?
				</h3>
				<p>
					The domain does not work alone, but it needs to be connected
					to the server or with the web hosting.
				</p>
				<p>
					The domain is linked to the hosting or server by changing
					the DNS address in the domain control panel to the same
					hosting address.
				</p>
				<p>
					After connecting the Domain, it displays the content stored
					in the hosting in front of the visitor when typing the name
					of the Domain in the browser.
				</p>
			</div>
		</article>
	);
}
