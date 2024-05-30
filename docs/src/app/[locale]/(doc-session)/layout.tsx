import "react-modern-drawer/dist/index.css";

import type { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";

import { getScopedI18n } from "@/locales/server";

import { LocaleParams } from "../types/locale";

export async function generateMetadata({
	params: { locale },
}: LocaleParams): Promise<Metadata> {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("DocumentationLayout");

	return {
		title: {
			template: `${t("Documentation")} | %s`,
			default: t("Documentation"),
		},
		description: t("Documentation for the Multiform Validator library."),
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
