import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function CnpjIsValid() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">cnpjIsValid Function Documentation</h1>
				<p>
					The <code>cnpjIsValid</code> function is used to validate a Brazilian
					CNPJ (National Registry of Legal Entities) number. It returns an
					object containing the <code>isValid</code> (boolean) and{" "}
					<code>errorMsg</code> (string) properties, indicating whether the CNPJ
					is valid and, in case of an error, the corresponding error message.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { cnpjIsValid } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes two parameters:</p>
				<ul>
					<li>
						<code>cnpj</code> (string) - The CNPJ number to validate.
					</li>
					<li>
						<code>errorMsg</code> (optional array) - A list of custom error
						messages. If not provided, it uses a default list of error messages.
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

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

				<h2 className="subtitle">Notes</h2>
				<p>
					If the function is called with an invalid value for the{" "}
					<code>errorMsg</code> parameter (non-array), or if an error occurs
					during the validation process, the function will return an object with{" "}
					<code>isValid</code> set to <code>false</code> and{" "}
					<code>errorMsg</code> containing the default error message
					&apos;Unknown error&apos;.
				</p>
			</div>
		</div>
	);
}
