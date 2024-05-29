import "@/css/infos.css";

import { Metadata } from "next";

import translation from "@/components/Internationalization";
import MainBg from "@/components/MainBg";

export function generateMetadata(): Metadata {
	const t = (text: string) => translation({ text, subject: "Terms" });

	return {
		title: t("Terms and Conditions"),
		description: t("Terms and Conditions of Multiform Validator library"),
	};
}

export default function TermsPage() {
	const t = (text: string) => translation({ text, subject: "Terms" });

	return (
		<MainBg>
			<section id="info-section">
				<h1>{t("Terms and Conditions")}</h1>
				<p>
					{t(
						"Welcome to Gabriel Logan Web Services. By using this website, you agree to the following terms and conditions:",
					)}
				</p>
				<p>
					{t(
						"The content provided on this website is for general information purposes only, and we make no warranties or representations regarding its accuracy or completeness.",
					)}
				</p>
				<p>
					{t(
						'We use the "multiform-validator" library, licensed under the MIT License, to enhance form field validation. However, we are not responsible for its usage or any consequences resulting from third-party use of the library.',
					)}
				</p>
				<p>
					{t(
						"We do not collect any personal data through this website, and your privacy is important to us.",
					)}
				</p>
				<p>{t("Unauthorized use of this website is strictly prohibited.")}</p>
				<p>
					{t(
						"Your use of this website and any disputes arising are subject to the laws of [Your Country/Region].",
					)}
				</p>
				<p className="last-p">
					{t(
						"Thank you for visiting our website and using our services. If you have any questions or concerns, please don’t hesitate to contact us.",
					)}
				</p>
			</section>
		</MainBg>
	);
}
