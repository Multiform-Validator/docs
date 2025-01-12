import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function IdentifyFlagCard({
	params: { locale },
}: Readonly<LocaleParams>) {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("DocumentationJsFunctions");
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent locale={locale} />
			</div>
			<div className="container-fluid container">
				<h1 className="title">
					identifyFlagCard {t("Function Documentation")}
				</h1>
				<p>
					{t("The")} <code>identifyFlagCard</code>{" "}
					{t(
						"function is used to identify the credit card flag based on the first digits of the card number. It returns the name of the card flag as a string.",
					)}
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "multiform-validator" package:',
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { identifyFlagCard } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { identifyFlagCard } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<p>{t("The function takes one parameter:")}</p>
				<ul>
					<li>
						<code>cardNumber</code> (string) -{" "}
						{t(
							"The credit card number for which to identify the flag based on the first digits.",
						)}
					</li>
				</ul>

				<h2 className="subtitle">{t("Example")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Identifying the card flag based on the first digits
const result = identifyFlagCard('6062 8226 8644 9791');
console.log(result); // Output: "Discover"`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>
					{t(
						"The function expects the credit card number to be passed as a string. It uses the first digits of the card number to identify the card flag and returns the corresponding flag name as a string. If the card flag cannot be identified or the input is not a string, it returns 'Unknown'.",
					)}
				</p>
			</div>
		</div>
	);
}
