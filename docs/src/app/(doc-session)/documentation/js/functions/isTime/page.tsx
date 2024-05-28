import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import translation from "@/components/Internationalization";

export default function IsTime() {
	const t = (text: string) =>
		translation({ text, subject: "DocumentationJsFunctions" });

	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isTime {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>isTime</code>{" "}
					{t(
						'function checks if the input value represents a valid time in the format "hh:mm" or "hh:mm AM/PM" or "hh:mm:ss" or "hh:mm:ss AM/PM". It returns',
					)}{" "}
					<code>true</code>{" "}
					{t("if the value matches any of these formats, and")}{" "}
					<code>false</code> {t("otherwise.")}
				</p>

				<h2 className="subtitle">{t("Import")}</h2>
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
					<code>{t("require")}</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isPostalCode } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>

				<p>
					{t(
						"The function takes one parameter, which must be a string representing the time to be checked.",
					)}
				</p>
				<ul>
					<li>
						<code>time</code> (string) -{" "}
						{t(
							'The time to be checked for validity. It must be in one of the supported formats: "hh:mm", "hh:mm AM/PM", "hh:mm:ss", or "hh:mm:ss AM/PM".',
						)}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid time formats
const result1 = isTime('12:34'); // true
console.log(result1);

const result2 = isTime('12:34 AM'); // true
console.log(result2);

const result3 = isTime('23:59:59'); // true
console.log(result3);

const result4 = isTime('12:34:56 PM'); // true
console.log(result4);

const result5 = isTime('12:34:56 AM'); // true
console.log(result5);

// Example 2 - Invalid time formats
const result6 = isTime('12:34:56XM'); // false (invalid format)
console.log(result6);

const result7 = isTime('25:00'); // false (invalid hour)
console.log(result7);

const result8 = isTime('23:60'); // false (invalid minute)
console.log(result8);

const result9 = isTime('23:59:61'); // false (invalid second)
console.log(result9);`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>
					{t(
						"The function uses a regular expression to check if the input time string matches any of the supported time formats. It returns",
					)}{" "}
					<code>true</code>{" "}
					{t("if the input value matches any of the supported formats, and")}{" "}
					<code>false</code> {t("otherwise.")}
				</p>
			</div>
		</div>
	);
}
