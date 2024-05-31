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
};

export default nextConfig;
