import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { LocaleParams } from "@/app/[locale]/types/locale";
import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";

export default async function IsValidPdf({ params: { locale } }: LocaleParams) {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("DocumentationJsFunctions");

	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent locale={locale} />
			</div>
			<div className="container-fluid">
				<h1>{t("How to use the isValidPdf function")}</h1>

				<p>
					{t("The")} <code>isValidPdf</code>{" "}
					{t(
						"function is used to check whether an pdf file is valid or not. It accepts a Buffer as an argument.",
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isValidPdf } from 'multiform-validator';
import PdfBuffer from 'pdf-buffer';

const buffer: Buffer = PdfBuffer;
const isValid = isValidPdf(buffer);

console.log(isValid);  // true if the pdf is valid, false otherwise`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
