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
	output: "export",
	basePath:
		process.env.NODE_ENV === "development" ? undefined : "/multiform-validator",
};

export default nextConfig;
