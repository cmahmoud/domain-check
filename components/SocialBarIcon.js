import React from "react";
import Link from "next/link";

export default function SocialBarIcon({ icon }) {
	return (
		<div style={{ background: icon.color }} className="social__bar--icon">
			<Link href={icon.url}>
				<a className="text-white" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox={icon.viewBox}
						width="24"
						height="24"
						fill="currentcolor"
					>
						<path d={icon.path} />
					</svg>
				</a>
			</Link>
		</div>
	);
}
