import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Javascript",
};

export default function JavascriptDocumentationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
