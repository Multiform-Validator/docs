import "react-modern-drawer/dist/index.css";

import type { Metadata } from "next";

import { getScopedI18n } from "@/locales/server";

export async function generateMetadata(): Promise<Metadata> {
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
}>;

export default function DocumentationLayout({
	children,
}: DocumentationLayoutProps) {
	return <>{children}</>;
}
