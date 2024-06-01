import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function IsDecimal({ params: { locale } }: LocaleParams) {
	const t = await getScopedI18n("DocumentationJsFunctions");
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent locale={locale} />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isDecimal {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>isDecimal</code>{" "}
					{t(
						"function checks if the input string or number represents a valid decimal number. It returns",
					)}{" "}
					<code>true</code>{" "}
					{t(
						"if the value is a valid decimal number and follows one of the supported formats, and",
					)}{" "}
					<code>false</code> {t("otherwise.")}
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "multiform-validator" package:',
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isDecimal } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isDecimal } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<p>{t("The function takes one parameter:")}</p>

				<ul>
					<li>
						<code>value</code> (string|number) -{" "}
						{t(
							"The input value to check if it represents a valid decimal number.",
						)}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid decimal numbers
const result1 = isDecimal('123.45');
console.log(result1); // true

const result2 = isDecimal('-123.45');
console.log(result2); // true

const result3 = isDecimal('0.123');
console.log(result3); // true

const result4 = isDecimal('1,234.56');
console.log(result4); // true

// Example 2 - Invalid decimal numbers
const result5 = isDecimal('1.234,56');
console.log(result5); // false (invalid format)

const result6 = isDecimal('abc');
console.log(result6); // false (not a valid number)

const result7 = isDecimal('12a.34');
console.log(result7); // false (not a valid number)

const result8 = isDecimal('12.34.56');
console.log(result8); // false (not a valid number)`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>
					{t(
						"The function expects the input value to be passed as a string or a number representing a decimal number. If the input is not a string or number, or an empty string, the function throws an error. It uses a regular expression to validate decimal numbers, supports both dot (.) and comma (,) as decimal separators, and checks for multiple decimal separators. Additionally, it performs checks for the negative sign to ensure it is only at the beginning of the value.",
					)}
				</p>
			</div>
		</div>
	);
}
