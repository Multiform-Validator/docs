import "@/css/infos.css";
import translation from "@/components/Internationalization";
import MainBg from "@/components/MainBg";

export default function AboutPage() {
	const t = (text: string) => translation({ text, subject: "About" });

	return (
		<MainBg>
			<section id="info-section">
				<h1>{t("about_title")}</h1>
				<p>{t("about_intro")}</p>
				<p>{t("about_frontend")}</p>
				<p>{t("about_backend")}</p>
				<p>{t("about_achievement")}</p>
				<p>{t("about_creative")}</p>
				<p>{t("about_inspiration")}</p>
				<p className="last-p">{t("about_conclusion")}</p>
			</section>
		</MainBg>
	);
}
