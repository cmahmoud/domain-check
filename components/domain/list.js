import React from "react";
import { useSelector } from "react-redux";
import Card from "@ui/domain/card";
import Skeleton from "@ui/domain/skeleton";

export default function List() {
	const domains = useSelector((state) => state.domainList);
	const loading = useSelector((state) => state.loading);
	return (
		<div className="list mb-4">
			{loading ? (
				<Skeleton />
			) : (
				domains?.map(({ domain, exists }, idx) => {
					return <Card key={idx} domain={domain} exists={exists} />;
				})
			)}
		</div>
	);
}
