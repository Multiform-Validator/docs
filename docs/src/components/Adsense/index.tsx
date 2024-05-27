import Script from "next/script";

interface AdsenseProps {
	GOOGLE_ADSENSE_CLIENT_ID: string | undefined;
}

export default function Adsense({ GOOGLE_ADSENSE_CLIENT_ID }: AdsenseProps) {
	return (
		<Script
			async
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE_CLIENT_ID}`}
			crossOrigin="anonymous"
		/>
	);
}
