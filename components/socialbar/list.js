import React from "react";
import Icon from "@ui/socialbar/icon";
import { icons } from "@ui/icons/social";

export default function SocialBar() {
	return (
		<div className="fixed flex flex-row md:flex-col bottom-0 md:top-1/4 md:left-0 w-full md:w-auto">
			{icons.map((icon, idx) => (
				<Icon icon={icon} key={idx} />
			))}
		</div>
	);
}
