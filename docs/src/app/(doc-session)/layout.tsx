import "react-modern-drawer/dist/index.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Documentation",
	description: "DOC DOC DOC",
	authors: { name: "Logan", url: "goole.com" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
