import "@/css/infos.css";
import { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";

import MainBg from "@/components/MainBg";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getScopedI18n("Info");

	return {
		title: t("Info_Page"),
		description: t("info_title"),
	};
}

export default async function InfoPage({ params: { locale } }: LocaleParams) {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("Info");

	return (
		<MainBg>
			<section id="info-section">
				<h1>{t("info_title")}</h1>
				<p>{t("info_intro")}</p>
				<p>{t("info_ensure")}</p>
				<p>{t("info_prebuilt_rules")}</p>
				<p>{t("info_backend")}</p>
				<p>{t("info_flexibility")}</p>
				<p>{t("info_performance")}</p>
				<p className="last-p">{t("info_conclusion")}</p>
			</section>
		</MainBg>
	);
}
