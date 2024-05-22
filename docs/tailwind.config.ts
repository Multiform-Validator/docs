import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				bg1: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg')",
			},
			backgroundColor: {
				header: "#14151a",
				dropdownMenu: "#1f2029",
				"bg1-dark": "#1f2029",
				hoverLi: "#ffffff33",
				"drawer-bg": "#121212",
			},
		},
	},
	plugins: [],
};
export default config;
