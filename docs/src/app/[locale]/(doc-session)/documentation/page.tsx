import Image from "next/image";
import Link from "next/link";
import { setStaticParamsLocale } from "next-international/server";
import { RiJavascriptFill } from "react-icons/ri";

import javaIcon from "@/assets/icons/java-icon.svg";
import pythonIcon from "@/assets/icons/python-icon.svg";
import MainBg from "@/components/MainBg";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function DocumentationPage({
	params: { locale },
}: LocaleParams) {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("DocumentationPage");

	const basePath = "/documentation";
	return (
		<MainBg>
			<section className="p-2">
				<h1 className="mb-4 mt-8 text-center text-2xl font-bold text-white sm:text-3xl md:text-start md:text-4xl lg:text-center">
					{t("doc_title")}
				</h1>
				<p className="mb-8 text-center text-base text-white sm:text-lg md:text-start lg:text-center">
					{t("doc_intro")}
				</p>
				<h2 className="mb-12 text-center text-xl font-semibold text-white sm:text-2xl md:text-start lg:text-center">
					{t("doc_subtitle")}
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Link
						href={`${basePath}/js`}
						className="mx-auto max-w-96 cursor-pointer rounded border-black bg-white p-4 shadow hover:scale-105 active:scale-100"
					>
						<RiJavascriptFill size={64} color="gold" />
						<h3 className="mb-2 mt-1 text-xl font-semibold text-black">
							{t("doc_js_title")}
						</h3>
						<p className="text-black">{t("doc_js_text")}</p>
					</Link>
					<Link
						href={`${basePath}/py`}
						className="mx-auto max-w-96 cursor-pointer rounded border-black bg-white p-4 shadow hover:scale-105 active:scale-100"
					>
						<Image src={pythonIcon} alt="python-icon" />
						<h3 className="mb-2 mt-1 text-xl font-semibold text-black">
							{t("doc_py_title")}
						</h3>
						<p className="text-black">{t("doc_py_text")}</p>
					</Link>
					<Link
						href={`${basePath}`}
						className="mx-auto max-w-96 cursor-pointer rounded border-black bg-white p-4 shadow hover:scale-105 active:scale-100"
					>
						<Image src={javaIcon} alt="java-icon" />
						<h3 className="mb-2 mt-1 text-xl font-semibold text-black">
							{t("doc_java_title")}
						</h3>
						<p className="text-black">{t("doc_java_text")}</p>
						<p className="mt-2 text-center text-black">
							{t("doc_java_coming")}
						</p>
					</Link>
				</div>
			</section>
		</MainBg>
	);
}
