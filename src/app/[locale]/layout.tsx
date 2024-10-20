import "../globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Script from "next/script";

import Adsense from "@/components/Adsense";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { inter } from "@/fonts";
import { I18nProviderClient } from "@/locales/client";
import { getScopedI18n, getStaticParams } from "@/locales/server";
import { Locale } from "@/types/Locales";

export function generateStaticParams() {
	return getStaticParams();
}

export async function generateMetadata(): Promise<Metadata> {
	const scopedT = await getScopedI18n("HomeLayout");

	return {
		metadataBase: new URL(
			process.env.NEXT_PUBLIC_WEBSITE_URL ||
				"https://multiformvalidator.netlify.app",
		),

		title: {
			template: `${scopedT("Title")} | %s`,
			default: scopedT("Title"),
		},

		description: scopedT("Description"),

		authors: { name: "Gabriel Logan", url: "https://github.com/gabriel-logan" },
		classification: scopedT("Classification"),
		generator: "Next.js",
		publisher: "Gabriel Logan",
		creator: "Gabriel Logan",

		openGraph: {
			title: scopedT("Opengraph title"),
			description: scopedT("Opengraph description"),
			url: process.env.NEXT_PUBLIC_WEBSITE_URL,
			siteName: scopedT("Title"),
			type: "website",
		},

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
			other: {
				"google-adsense-account": process.env
					.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID as string,
			},
		},

		appleWebApp: {
			title: scopedT("Title"),
			capable: true,
			statusBarStyle: "black-translucent",
		},

		manifest: "/manifest.webmanifest",

		category: "technology",

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
}

type DocumentationLayoutProps = Readonly<{
	children: React.ReactNode;
	params: Locale;
}>;

export default async function RootLayout({
	children,
	params: { locale },
}: DocumentationLayoutProps) {
	const scopedT = await getScopedI18n("HomeLayout");

	return (
		<html lang={locale}>
			<head>
				<Adsense
					GOOGLE_ADSENSE_CLIENT_ID={
						process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID
					}
				/>
				{/**<!-- Google tag (gtag.js) --> */}
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-11180158373"
				/>
				<Script id="googleTag">
					{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-11180158373');
					`}
				</Script>
			</head>
			<body className={inter.className}>
				<I18nProviderClient locale={locale}>
					<Header locale={locale} />
					{children}
					<Footer locale={locale} />
				</I18nProviderClient>
				<script
					data-name="BMC-Widget"
					data-cfasync="false"
					src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
					data-id="gabriellogan"
					data-description={scopedT("Support me on Buy me a coffee")}
					data-message=""
					data-color="#5F7FFF"
					data-position="Right"
					data-x_margin="18"
					data-y_margin="18"
					defer
				/>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
