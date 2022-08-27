import React from "react";
import SocialBarIcon from "@ui/SocialBarIcon";
import { icons } from "@ui/icons/social";

export default function SocialBar() {
	return (
		<div className="social__bar">
			{icons.map((icon, idx) => (
				<SocialBarIcon icon={icon} key={idx} />
			))}
		</div>
	);
}
