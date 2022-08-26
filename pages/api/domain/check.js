import dns from "dns";
import { tlds } from "@lib/tlds";

export default function handler(req, res) {
	switch (req.method) {
		case "POST":
			return Promise.all(
				tlds.map((tld) => {
					return new Promise((resolve) => {
						dns.lookup(
							`${req.body.domain}.${tld}`,
							(error, address, family) =>
								resolve({
									address,
                  domain: `${req.body.domain}.${tld}`,
									exists: address ? true : false,
								})
						);
					});
				})
			)
				.then((result) => {
					res.status(200).json(result);
				})
				.catch((err) => {
					res.status(200).json(err);
				});
			break;

		default:
			res.status(400).send("Not Found");
			break;
	}
}
