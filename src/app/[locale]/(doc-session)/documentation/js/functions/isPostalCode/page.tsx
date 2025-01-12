import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function IsPostalCode({
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
				<h1 className="title">isPostalCode {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>isPostalCode</code>{" "}
					{t(
						"function checks if the input value represents a valid postal code for supported countries. It returns",
					)}{" "}
					<code>true</code>{" "}
					{t(
						"if the value matches the postal code format for any of the supported countries, and",
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
					{`import { isPostalCode } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isPostalCode } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>

				<p>
					{t(
						"The function takes one parameter, which must be a string representing the postal code to be checked.",
					)}
				</p>
				<ul>
					<li>
						<code>postalCode</code> (string) -{" "}
						{t("The postal code to be checked for validity.")}
					</li>
				</ul>

				<h2 className="subtitle">{t("Supported Countries")}</h2>
				<p>
					{t("The function supports postal codes for the following countries:")}
				</p>
				<ul>
					<li>{t("United States of America")}</li>
					<li>{t("Canada")}</li>
					<li>{t("United Kingdom")}</li>
					<li>{t("France")}</li>
					<li>{t("Netherlands")}</li>
					<li>{t("Japan")}</li>
					<li>{t("Spain")}</li>
					<li>{t("South Africa")}</li>
					<li>{t("Germany")}</li>
					<li>{t("Switzerland")}</li>
					<li>{t("Brazil")}</li>
					<li>{t("Italy")}</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid postal codes
const result1 = isPostalCode('12345'); // true (United States)
console.log(result1);

const result2 = isPostalCode('M4B 1B3'); // true (Canada)
console.log(result2);

const result3 = isPostalCode('SW1A 1AA'); // true (United Kingdom)
console.log(result3);

const result4 = isPostalCode('75013'); // true (France)
console.log(result4);

const result5 = isPostalCode('1012'); // true (Netherlands)
console.log(result5);

const result6 = isPostalCode('100-0001'); // true (Japan)
console.log(result6);

// Example 2 - Invalid postal codes
const result7 = isPostalCode('28001'); // true (Spain)
console.log(result7);

const result8 = isPostalCode('8000'); // true (South Africa)
console.log(result8);

const result9 = isPostalCode('13355'); // true (Germany)
console.log(result9);

const result10 = isPostalCode('1002'); // true (Switzerland)
console.log(result10);

const result11 = isPostalCode('10045-123'); // true (Brazil)
console.log(result11);

const result12 = isPostalCode('00100'); // true (Italy)
console.log(result12);

const result13 = isPostalCode('90210'); // true (United States ZIP Code)
console.log(result13);

// Example 3 - Not a valid postal code
const result14 = isPostalCode('Hello'); // false (not a valid postal code)
console.log(result14);`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>
					{t(
						"The function uses regular expressions to check the input postal code against supported 'countries' postal code formats. It returns",
					)}{" "}
					<code>true</code>{" "}
					{t(
						"if the input value matches any of the supported postal code formats, and",
					)}{" "}
					<code>false</code> {t("otherwise.")}
				</p>
			</div>
		</div>
	);
}
