import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Python",
};

export default function PythonDocumentationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
