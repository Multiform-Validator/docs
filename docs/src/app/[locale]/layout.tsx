import type { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";

import { getScopedI18n, getStaticParams } from "@/locales/server";

import { LocaleParams } from "./types/locale";

export function generateStaticParams() {
	return getStaticParams(); // PT and EN
}

export async function generateMetadata({
	params: { locale },
}: LocaleParams): Promise<Metadata> {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("HomeLayout");

	return {
		metadataBase: new URL(
			`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}` ||
				`https://multiform-validator.3utilities.com/${locale}`,
		),

		description: t("Description"),

		classification: t("Classification"),

		openGraph: {
			title: t("Opengraph title"),
			description: t("Opengraph description"),
			url: process.env.NEXT_PUBLIC_WEBSITE_URL,
			siteName: t("Title"),
			type: "website",
		},

		appleWebApp: {
			title: t("Title"),
			capable: true,
			statusBarStyle: "black-translucent",
		},

		category: t("Technology"),
	};
}

type DocumentationLayoutProps = Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>;

export default function DocumentationLayout({
	children,
}: DocumentationLayoutProps) {
	return <>{children}</>;
}
