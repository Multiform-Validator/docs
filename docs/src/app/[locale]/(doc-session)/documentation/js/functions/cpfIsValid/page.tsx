import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { LocaleParams } from "@/app/[locale]/types/locale";
import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";

export default async function CpfIsValid({ params: { locale } }: LocaleParams) {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("DocumentationJsFunctions");

	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent locale={locale} />
			</div>
			<div className="container-fluid container">
				<h1 className="title">cpfIsValid {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>cpfIsValid</code>{" "}
					{t(
						"function is used to validate a Brazilian CPF (Individual Taxpayer Identification) number. It returns an object containing the",
					)}{" "}
					<code>isValid</code> (boolean) {t("and")} <code>errorMsg</code>{" "}
					(string){" "}
					{t(
						"properties, indicating whether the CPF is valid and, in case of an error, the corresponding error message.",
					)}
				</p>

				<h2 className="subtitle">Import</h2>
				<p>{t("There are two ways to import the function:")}</p>
				<ul>
					<li>
						<strong>
							{t("Using")} <code>require</code> (Node.js):
						</strong>
					</li>
					<SyntaxHighlighter language="javascript" style={a11yDark}>
						{`const { cpfIsValid } = require('multiform-validator');`}
					</SyntaxHighlighter>
					<li>
						<strong>
							{t("Using")} <code>Import</code> (ES6):
						</strong>
					</li>
					<SyntaxHighlighter language="javascript" style={a11yDark}>
						{`import { cpfIsValid } from 'multiform-validator';`}
					</SyntaxHighlighter>
				</ul>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<p>{t("The function takes two parameters:")}</p>
				<ul>
					<li>
						<code>cpf</code> (string) - {t("The CPF number to be validated.")}
					</li>
					<li>
						<code>errorMsg</code> ({t("optional array")}) -{" "}
						{t(
							"A list of custom error messages. If not provided, it uses a default list of error messages.",
						)}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Using the CPF number '123.456.789.10'
const result1 = cpfIsValid('123.456.789.10');
console.log(result1.isValid); // false
console.log(result1.errorMsg); // 'CPF invalid'

// Example 2 - Using the CPF number '12345678910' and custom error messages
const result2 = cpfIsValid("12345678910", [
	"CPF is wrong",
	"Must have at least 11 digits",
]);
console.log(result2.isValid); // false
console.log(result2.errorMsg); // 'CPF is wrong'

// Example 3 - Using a valid CPF number '52998224725'
const result3 = cpfIsValid('52998224725');
console.log(result3.isValid); // true
console.log(result3.errorMsg); // null`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>
					{t("If the function is called with an invalid value for the")}{" "}
					<code>errorMsg</code>{" "}
					{t(
						"parameter (non-array), or if an error occurs during the validation process, the function will return an object with",
					)}{" "}
					<code>isValid</code> {t("set to")} <code>false</code> {t("and")}{" "}
					<code>errorMsg</code>{" "}
					{t("containing the default error message 'Unknown error'.")}
				</p>
			</div>
		</div>
	);
}
