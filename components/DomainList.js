import React from "react";
import { useSelector } from "react-redux";
import Domain from "@ui/Domain";
import Skeleton from "@ui/Skeleton";

export default function DomainList() {
	const domains = useSelector((state) => state.domainList);
	const loading = useSelector((state) => state.loading);
	return (
		<div className="list mb-16 md:mb-4">
			{loading ? (
				<Skeleton />
			) : (
				domains?.map(({ domain, exists }, idx) => {
					return <Domain key={idx} domain={domain} exists={exists} />;
				})
			)}
		</div>
	);
}
