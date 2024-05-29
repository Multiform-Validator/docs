import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import translation from "@/components/Internationalization";

export default function CnpjIsValid() {
	const t = (text: string) =>
		translation({ text, subject: "DocumentationJsFunctions" });

	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">cnpjIsValid {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>cnpjIsValid</code>{" "}
					{t(
						"function is used to validate a Brazilian CNPJ (National Registry of Legal Entities) number. It returns an object containing the",
					)}{" "}
					<code>isValid</code> (boolean) {t("and")} <code>errorMsg</code>{" "}
					(string){" "}
					{t(
						"properties, indicating whether the CNPJ is valid and, in case of an error, the corresponding error message.",
					)}
				</p>

				<h2 className="subtitle">{t("Import")}</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "multiform-validator" package:',
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { cnpjIsValid } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<p>{t("The function takes two parameters:")}</p>
				<ul>
					<li>
						<code>cnpj</code> (string) - {t("The CNPJ number to be validate.")}
					</li>
					<li>
						<code>errorMsg</code> ({t("optional array")}) -{" "}
						{t(
							"A list of custom error messages. If not provided, it uses a default list of error	messages.",
						)}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Using the CNPJ number '72.501.263/0001-40' const
result1 = cnpjIsValid('72.501.263/0001-40');
console.log(result1.isValid); // true
console.log(result1.errorMsg); // null

// Example 2 - Using the CNPJ number '73.506.263/0001-45' and custom error messages
const result2 = cnpjIsValid('73.506.263/0001-45', ['CNPJ is wrong']);
console.log(result2.isValid); // false
console.log(result2.errorMsg); // 'CNPJ is wrong'`}
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
					{t("containing the default error message 'Unknown	error'.")}
				</p>
			</div>
		</div>
	);
}
