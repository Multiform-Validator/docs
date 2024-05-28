import "@/css/infos.css";
import translation from "@/components/Internationalization";
import MainBg from "@/components/MainBg";

export default function InfoPage() {
	const t = (text: string) => translation({ text, subject: "Info" });

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
