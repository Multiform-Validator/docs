import "@/css/news.css";
import { setStaticParamsLocale } from "next-international/server";

import MainBg from "@/components/MainBg";
import { LocaleParams } from "@/types/Params";

import ClientNewsPage from "./client";

export default function NewsPage({ params: { locale } }: LocaleParams) {
	setStaticParamsLocale(locale);

	return (
		<MainBg>
			<ClientNewsPage />
		</MainBg>
	);
}
