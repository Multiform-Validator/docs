import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import Adsense from "@/components/Adsense";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Multiform Validator",
	description:
		"Multilingual library made for validation, various form fields, such as: email, telephone, password, cpf, cnpj, credit card, magic numbers for image mimetype validation and much more.",
	authors: { name: "Gabriel Logan", url: "https://github.com/gabriel-logan" },
	classification: "Validation Library",
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
	verification: { google: process.env.GOOGLE_SEARCH_CONSOLE_API_KEY },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta
					name="google-adsense-account"
					content={process.env.GOOGLE_ADSENSE_CLIENT_ID}
				/>
				<Adsense
					GOOGLE_ADSENSE_CLIENT_ID={process.env.GOOGLE_ADSENSE_CLIENT_ID}
				/>
			</head>
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
				<Script
					data-name="BMC-Widget"
					data-cfasync="false"
					src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
					data-id="gabriellogan"
					data-description="Support me on Buy me a coffee!"
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
