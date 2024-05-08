import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function CpfIsValid() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">cpfIsValid Function Documentation</h1>
				<p>
					The <code>cpfIsValid</code> function is used to validate a Brazilian
					CPF (Individual Taxpayer Identification) number. It returns an object
					containing the <code>isValid</code> (boolean) and{" "}
					<code>errorMsg</code> (string) properties, indicating whether the CPF
					is valid and, in case of an error, the corresponding error message.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>There are two ways to import the function:</p>
				<ul>
					<li>
						<strong>
							Using <code>require</code> (Node.js):
						</strong>
					</li>
					<SyntaxHighlighter language="javascript" style={a11yDark}>
						{`const { cpfIsValid } = require('multiform-validator');`}
					</SyntaxHighlighter>
					<li>
						<strong>
							Using <code>import</code> (ES6):
						</strong>
					</li>
					<SyntaxHighlighter language="javascript" style={a11yDark}>
						{`import { cpfIsValid } from 'multiform-validator';`}
					</SyntaxHighlighter>
				</ul>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes two parameters:</p>
				<ul>
					<li>
						<code>cpf</code> (string) - The CPF number to validate.
					</li>
					<li>
						<code>errorMsg</code> (optional array) - A list of custom error
						messages. If not provided, it uses a default list of error messages.
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Using the CPF number '123.456.789.10'
const result1 = cpfIsValid('123.456.789.10');
console.log(result1.isValid); // false
console.log(result1.errorMsg); // 'CPF invalid'

// Example 2 - Using the CPF number '12345678910' and custom error messages
const result2 = cpfIsValid("12345678910", [
	"CPF is wrong",
	"Must have at least 11 digits",
]);
console.log(result2.isValid); // false
console.log(result2.errorMsg); // 'CPF is wrong'

// Example 3 - Using a valid CPF number '52998224725'
const result3 = cpfIsValid('52998224725');
console.log(result3.isValid); // true
console.log(result3.errorMsg); // null`}
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
