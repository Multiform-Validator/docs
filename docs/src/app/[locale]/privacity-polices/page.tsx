import "@/css/infos.css";

import { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";

import MainBg from "@/components/MainBg";
import { getScopedI18n } from "@/locales/server";

import { LocaleParams } from "../types/locale";

export async function generateMetadata({
	params: { locale },
}: LocaleParams): Promise<Metadata> {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("PrivacyPolices");
	return {
		title: t("Privacy Policy"),
		description: t("privacy_title"),
	};
}

export default async function PrivacityPolicesPage({
	params: { locale },
}: LocaleParams) {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("PrivacyPolices");

	return (
		<MainBg>
			<section id="info-section">
				<h1>{t("privacy_title")}</h1>
				<p>{t("privacy_intro")}</p>
				<p>{t("privacy_no_personal_data")}</p>
				<p>{t("validator_local")}</p>
				<p>{t("validator_secure")}</p>
				<p>{t("privacy_trust")}</p>
				<p>{t("privacy_questions")}</p>
				<p className="last-p">{t("privacy_thanks")}</p>
			</section>
		</MainBg>
	);
}
