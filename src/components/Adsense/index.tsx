import Adsbygoogle from "./Adsbygoogle";

interface AdsenseProps {
	GOOGLE_ADSENSE_CLIENT_ID: string | undefined;
}

export default function Adsense({ GOOGLE_ADSENSE_CLIENT_ID }: AdsenseProps) {
	return (
		<script
			async
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE_CLIENT_ID}`}
			crossOrigin="anonymous"
		/>
	);
}

interface AddBannerProps {
	AdClient: string;
	AdSlot: string;
	AdFormat?: string;
	FullWidthResponsive?: boolean;
}

// TEST
export function AddBanner({
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
			<Adsbygoogle NODE_ENV={process.env.NEXT_PUBLIC_NODE_ENV} />
		</>
	);
}
