import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function IsNumber({
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
				<h1 className="title">isNumber {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>isNumber</code>{" "}
					{t(
						"function checks if the input value is a valid number. It returns",
					)}{" "}
					<code>true</code> {t("if the value is a valid number, and")}{" "}
					<code>false</code> {t("otherwise.")}
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "multiform-validator" package:',
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isNumber } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isNumber } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<p>{t("The function takes one parameter:")}</p>
				<ul>
					<li>
						<code>value</code> (any) -{" "}
						{t("The value to be checked if it represents a valid number.")}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid numbers
const result1 = isNumber(123); // true
console.log(result1);

// Example 2 - Not a valid number
const result2 = isNumber('abc'); // false
console.log(result2);`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>
					{t(
						"The function checks if the input value is not null, undefined, or a boolean type. If any of these conditions are met, the function returns false since these values cannot represent valid numbers. For all other types, the function uses the.",
					)}{" "}
					<code>parseFloat</code>{" "}
					{t(
						"function to convert the value to a floating-point number. If the conversion results in a valid number and the value is finite (not infinity or NaN), the function returns true, indicating that the input value is a valid number. Otherwise, it returns false.",
					)}
				</p>
			</div>
		</div>
	);
}
