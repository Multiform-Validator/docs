import type { Metadata } from "next";

import { getScopedI18n } from "@/locales/server";

export async function generateMetadata(): Promise<Metadata> {
	const scopedT = await getScopedI18n("News");

	return {
		title: scopedT("News Ad Page"),
		description: scopedT("News Ad Page for the Multiform Validator library."),
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
