import "react-modern-drawer/dist/index.css";

import type { Metadata } from "next";

import translation from "@/components/Internationalization";

const t = (text: string) =>
	translation({ text, subject: "DocumentationLayout" });

export const metadata: Metadata = {
	title: {
		template: `${t("Documentation")} | %s`,
		default: t("Documentation"),
	},
	description: t("Documentation for the Multiform Validator library."),
};

export default function DocumentationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
