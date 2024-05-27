import Script from "next/script";

interface AddBannerProps {
	AdClient: string;
	AdSlot: string;
	AdFormat?: string;
	FullWidthResponsive?: boolean;
}

export default function AddBanner({
	AdClient,
	AdSlot,
	AdFormat = "auto",
	FullWidthResponsive = true,
}: AddBannerProps) {
	return (
		<>
			<ins
				className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-client={AdClient}
				data-ad-slot={AdSlot}
				data-ad-format={AdFormat}
				data-full-width-responsive={FullWidthResponsive}
			/>
			<Script id="adsbygoogle-start" strategy="lazyOnload">
				{`(adsbygoogle = window.adsbygoogle || []).push({});`}
			</Script>
		</>
	);
}
