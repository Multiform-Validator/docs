import "react-modern-drawer/dist/index.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Documentation",
	description: "Documentation for the Multiform Validator library.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
