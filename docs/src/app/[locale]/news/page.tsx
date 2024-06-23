"use client";

import "@/css/news.css";
import { useEffect, useState } from "react";

import { AddBanner } from "@/components/Adsense";
import MainBg from "@/components/MainBg";

export default function NewsPage() {
	const GOOGLE_ADSENSE_CLIENT_ID =
		process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID ?? "";

	const SlotAd1AndAd2 = "9630566447";
	const SlotAd3 = "8700628151";
	const SlotAd4 = "3500719479";
	const SlotAd5AndAd6 = "7092033017";

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<MainBg>
			{isClient && (
				<>
					<div id="news-page">
						<div className="div-ad div-ad1">
							<AddBanner
								AdClient={GOOGLE_ADSENSE_CLIENT_ID}
								AdSlot={SlotAd1AndAd2}
							/>
						</div>

						<div className="div-ad div-ad2">
							<AddBanner
								AdClient={GOOGLE_ADSENSE_CLIENT_ID}
								AdSlot={SlotAd1AndAd2}
							/>
						</div>

						<div className="div-ad div-ad3">
							<AddBanner
								AdClient={GOOGLE_ADSENSE_CLIENT_ID}
								AdSlot={SlotAd3}
								AdFormat="fluid"
							/>
						</div>

						<div className="div-ad div-ad4">
							<AddBanner
								AdClient={GOOGLE_ADSENSE_CLIENT_ID}
								AdSlot={SlotAd4}
								AdFormat="autorelaxed"
							/>
						</div>

						<div className="div-ad div-ad5">
							<AddBanner
								AdClient={GOOGLE_ADSENSE_CLIENT_ID}
								AdSlot={SlotAd5AndAd6}
							/>
						</div>

						<div className="div-ad div-ad6">
							<AddBanner
								AdClient={GOOGLE_ADSENSE_CLIENT_ID}
								AdSlot={SlotAd5AndAd6}
							/>
						</div>
					</div>
				</>
			)}
		</MainBg>
	);
}
