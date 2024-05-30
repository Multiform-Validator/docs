import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { LocaleParams } from "@/app/[locale]/types/locale";
import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";

export default async function GetOnlyEmail({
	params: { locale },
}: LocaleParams) {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("DocumentationJsFunctions");

	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent locale={locale} />
			</div>
			<div className="container-fluid container">
				<h1 className="title">getOnlyEmail {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>getOnlyEmail</code>{" "}
					{t(
						"function extracts email addresses from a given text. If the optional",
					)}{" "}
					<code>multiple</code> {t("parameter is set to")} <code>true</code>,{" "}
					{t(
						"it returns an array with all the email addresses found. Otherwise, it returns only the first email address found as a string.",
					)}
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "multiform-validator" package:',
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { getOnlyEmail } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { getOnlyEmail } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<p>{t("The function takes two parameters:")}</p>
				<ul>
					<li>
						<code>text</code> (string) -{" "}
						{t("The input text from which emails will be extracted.")}
					</li>
					<li>
						<code>multiple</code> {t("(optional boolean) - If set to")}{" "}
						<code>true</code>,{" "}
						{t(
							"the function will return an array with all the email addresses found. If set to",
						)}{" "}
						<code>false</code>{" "}
						{t(
							"or not provided, it will return only the first email address found as a string.",
						)}
					</li>
					<li>
						<code>cleanDomain</code>{" "}
						{t(
							"(optional boolean | string[]) - Either a boolean value indicating whether to clean after default domains or an array of custom domains to clean after. Default is",
						)}{" "}
						<code>false</code>{" "}
						{t(
							"which means it won't clean the email addresses after default domains ['.br', '.io', '.pt', '.us', '.org', '.com'];. If set to",
						)}{" "}
						<code>true</code>,{" "}
						{t(
							"it will clean after default domains. If set to an array of strings, it will clean after the specified custom domains.",
						)}
					</li>
					<li>
						<code>repeatEmail</code> {t("(optional boolean) - If set to")}{" "}
						<code>false</code>,{" "}
						{t(
							"the function will remove duplicate emails from the output list. If set to",
						)}{" "}
						<code>true</code>{" "}
						{t(
							"or not provided, it will keep the duplicate emails in the output list.",
						)}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Extracting multiple emails from the text
const result1 = getOnlyEmail(
	"Entre em contato com a equipe: joao@empresa.com, maria@empresa.com, contato@empresa.com",
	{ multiple: true },
);
console.log(result1);
// Output: ["joao@empresa.com", "maria@empresa.com", "contato@empresa.com"]

// Example 2 - Extracting the first email from the text
const result2 = getOnlyEmail(
	"Vaga na asdlaod  Mande seu email para fiawn@rdwah.com Sim aqui mesmo",
);
console.log(result2);
// Output: "fiawn@rdwah.com"

const result3 = getOnlyEmail(
	"Vaga na asdlaod  Mande seu email para fiawn@rdwah.comSim aqui  asdasd@gmail.commesmo",
	{ multiple: true, cleanDomain: true },
);
console.log(result3);
// Output: [ 'fiawn@rdwah.com', 'asdasd@gmail.com' ]

const result4 = getOnlyEmail(
	"Vaga na asdlaod  Mande seu email para fiawn@rdwah.comSim aqui  asdasd@gmail.commesmo asdasd asd as fiawn@rdwah.com",
	{ multiple: true, cleanDomain: true, repeatEmail: true },
);
console.log(result4);
// Output: [ 'fiawn@rdwah.com', 'asdasd@gmail.com', 'fiawn@rdwah.com' ]`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>
					{t(
						"If no email address is found in the input text, the function will return the string 'No email found'.",
					)}
				</p>
			</div>
		</div>
	);
}
