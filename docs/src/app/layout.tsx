import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			{children}
			<Analytics />
			<SpeedInsights />
		</>
	);
}
