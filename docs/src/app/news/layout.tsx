import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "News Ad Page",
	description: "News Ad Page for the Multiform Validator library.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
