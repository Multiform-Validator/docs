import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import translation from "@/components/Internationalization";

export default function IsEmpty() {
	const t = (text: string) =>
		translation({ text, subject: "DocumentationJsFunctions" });

	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isEmpty {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>isEmpty</code>{" "}
					{t(
						"function checks if the input string is empty or contains only whitespace characters. It returns",
					)}{" "}
					<code>true</code>{" "}
					{t(
						"if the input string is empty or consists of only whitespace characters, and",
					)}{" "}
					<code>false</code> {t("otherwise.")}
				</p>

				<h2 className="subtitle">{t("Import")}</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "multiform-validator" package:',
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isEmpty } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>{t("require")}</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isEmpty } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<p>{t("The function takes one parameter:")}</p>

				<ul>
					<li>
						<code>value</code> (string) -{" "}
						{t(
							"The input string to check if it is empty or contains only whitespace characters.",
						)}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Empty or whitespace strings
const result1 = isEmpty(''); // true
console.log(result1);

const result2 = isEmpty('   '); // true
console.log(result2);

// Example 2 - Non-empty strings
const result3 = isEmpty('Hello'); // false
console.log(result3);

const result4 = isEmpty('   Hello   '); // false
console.log(result4);

// Example 3 - Non-string inputs (will throw an error)
const result5 = isEmpty(null);
console.log(result5);

const result6 = isEmpty(undefined);
console.log(result6);`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>
					{t(
						"The function expects the input value to be passed as a string. If the input is not a string, the function throws a TypeError. It removes any leading and trailing whitespace from the input string using the.",
					)}{" "}
					<code>trim()</code>{" "}
					{t(
						"method and checks if the resulting string is empty (i.e., has a length of 0). If the input string consists of only whitespace characters, the function also returns.",
					)}{" "}
					<code>true</code>
					{t("as it considers such strings to be empty.")}
				</p>
			</div>
		</div>
	);
}
