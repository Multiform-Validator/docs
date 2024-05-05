/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: false,
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
	distDir: "page",
	basePath:
		process.env.NODE_ENV === "production" ? "/multiform-validator" : undefined,
};

export default nextConfig;
