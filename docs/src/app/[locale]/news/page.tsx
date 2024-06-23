import "@/css/news.css";
import { setStaticParamsLocale } from "next-international/server";

import MainBg from "@/components/MainBg";
import { LocaleParams } from "@/types/Params";

export default function NewsPage({ params: { locale } }: LocaleParams) {
	setStaticParamsLocale(locale);
	return (
		<MainBg>
			<div id="news-page">
				<div className="div-ad div-ad1" />

				<div className="div-ad div-ad2" />

				<div className="div-ad div-ad3" />

				<div className="div-ad div-ad4" />

				<div className="div-ad div-ad5" />

				<div className="div-ad div-ad6" />
			</div>
		</MainBg>
	);
}
