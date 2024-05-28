import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Adsense from "@/components/Adsense";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import translation from "@/components/Internationalization";

const inter = Inter({ subsets: ["latin"] });

const t = (text: string) => translation({ text, subject: "HomeLayout" });

export const metadata: Metadata = {
	title: t("Multiform Validator"),
	description: t("Description"),
	authors: { name: "Gabriel Logan", url: "https://github.com/gabriel-logan" },
	classification: t("Classification"),
	generator: "Gabriel Logan",
	keywords: [
		"validation",
		"form",
		"fields",
		"email",
		"telephone",
		"password",
		"cpf",
		"cnpj",
		"credit card",
		"magic numbers",
		"image",
		"mimetype",
		"validator",
		"multiform",
		"validação",
		"email-validator",
		"multiform-validator",
		"javascript",
		"npm",
		"security",
		"safe",
		"pentest",
		"security-tools",
		"Validator",
		"validate",
	],
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_API_KEY,
	},
	appleWebApp: {
		title: t("Multiform Validator"),
		capable: true,
		statusBarStyle: "black-translucent",
	},
	applicationName: t("Multiform Validator"),
	manifest: "/manifest.webmanifest",
	icons: [
		{
			rel: "android-chrome-192x192",
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/android-chrome-192x192.png`,
		},
		{
			rel: "android-chrome-512x512",
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/android-chrome-512x512.png`,
		},
		{
			rel: "apple-touch-icon",
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/apple-touch-icon.png`,
		},
		{
			rel: "favicon-16x16",
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/favicon-16x16.png`,
		},
		{
			rel: "favicon-32x32",
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/favicon-32x32.png`,
		},
		{
			rel: "mstile-150x150",
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/mstile-150x150.png`,
		},
		{
			rel: "safari-pinned-tab",
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/safari-pinned-tab.svg`,
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" dir="ltr">
			<head>
				<meta
					name="google-adsense-account"
					content={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}
				/>
				<Adsense
					GOOGLE_ADSENSE_CLIENT_ID={
						process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID
					}
				/>
			</head>
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
				<script
					data-name="BMC-Widget"
					data-cfasync="false"
					src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
					data-id="gabriellogan"
					data-description={t("Support me on Buy me a coffee")}
					data-message=""
					data-color="#5F7FFF"
					data-position="Right"
					data-x_margin="18"
					data-y_margin="18"
					defer
				/>
			</body>
		</html>
	);
}
