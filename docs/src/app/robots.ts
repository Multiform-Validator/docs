import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
		},
		sitemap: "https://multiform-validator.3utilities.com/sitemap.xml",
	};
}
