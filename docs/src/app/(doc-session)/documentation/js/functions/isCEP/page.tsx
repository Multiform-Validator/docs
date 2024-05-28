import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import translation from "@/components/Internationalization";

export default function IsCEP() {
	const t = (text: string) =>
		translation({ text, subject: "DocumentationJsFunctions" });

	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isCEP {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>isCEP</code>{" "}
					{t(
						"function checks if the input string is a valid Brazilian ZIP Code (CEP). It returns",
					)}{" "}
					<code>true</code> {t("if the CEP is valid, and")} <code>false</code>{" "}
					{t("otherwise.")}
				</p>

				<h2 className="subtitle">{t("Import")}</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "multiform-validator" package:',
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isCEP } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>{t("require")}</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isCEP } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<p>{t("The function takes one parameter:")}</p>
				<ul>
					<li>
						<code>cep</code> (string) -{" "}
						{t(
							"The input string to check if it is a valid Brazilian ZIP Code (CEP).",
						)}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Checking if the CEP is valid with dashes
const result1 = isCEP('12345-678');
console.log(result1); // true

// Example 2 - Checking if the CEP is valid without dashes
const result2 = isCEP('12345678');
console.log(result2); // true

// Example 3 - Checking an invalid CEP with an incorrect format
const result3 = isCEP('12.345-678');
console.log(result3); // false`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>{t("The function expects the input to be passed as a string.")}</p>
			</div>
		</div>
	);
}
