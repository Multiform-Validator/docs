import "@/css/infos.css";

import translation from "@/components/Internationalization";
import MainBg from "@/components/MainBg";

export default function PrivacityPolicesPage() {
	const t = (text: string) => translation({ text, subject: "PrivacyPolices" });

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
