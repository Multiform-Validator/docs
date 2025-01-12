import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function IsBase64({
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
				<h1 className="title">isBase64 {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>isBase64</code>{" "}
					{t(
						"function checks if the input string is a valid Base64 string. It returns",
					)}{" "}
					<code>true</code> {t("if the string is a valid Base64, and")}{" "}
					<code>false</code> {t("otherwise.")}
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "multiform-validator" package:',
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isBase64 } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isBase64 } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<p>{t("The function takes one parameter:")}</p>

				<ul>
					<li>
						<code>value</code> (string) -{" "}
						{t("The input string to check if it is a valid Base64 string.")}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Checking if the string is a valid Base64
const result1 = isBase64('SGVsbG8gV29ybGQh');
console.log(result1); // true

// Example 2 - Checking a non-Base64 string
const result2 = isBase64('こんにちは');
console.log(result2); // false

// Example 3 - Checking a non-Base64 string with digits
const result3 = isBase64('12345');
console.log(result3); // false

// Example 4 - Checking a null value
const result4 = isBase64(null);
console.log(result4); // false`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>
					{t(
						"The function expects the input value to be passed as a string. It checks if the string is a valid Base64 string using a regular expression. If the input is not a string or an empty string, it throws an error.",
					)}
				</p>
			</div>
		</div>
	);
}
