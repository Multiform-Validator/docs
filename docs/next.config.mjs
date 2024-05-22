/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.shields.io",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "badge.fury.io",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "cdn.buymeacoffee.com",
				port: "",
				pathname: "**",
			},
		],
	},
	output: process.env.NODE_ENV === "development" ? undefined : "export",
	distDir: process.env.NODE_ENV === "development" ? undefined : "page",
	basePath:
		process.env.NODE_ENV === "development" ? undefined : "/multiform-validator",
};

export default nextConfig;
