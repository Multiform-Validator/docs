import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsCEP() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isCEP Function Documentation</h1>
				<p>
					The <code>isCEP</code> function checks if the input string is a valid
					Brazilian ZIP Code (CEP). It returns <code>true</code> if the CEP is
					valid, and <code>false</code> otherwise.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { IsCEP } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { IsCEP } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes one parameter:</p>
				<ul>
					<li>
						<code>cep</code> (string) - The input string to check if it is a
						valid Brazilian ZIP Code (CEP).
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

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

				<h2 className="subtitle">Notes</h2>
				<p>
					The function expects the input value to be passed as a string
					representing a Brazilian ZIP Code (CEP). It removes any non-digit
					characters (e.g., dashes) and checks if the resulting string contains
					exactly eight digits. If the input is not a string or does not have
					exactly eight digits, the function returns <code>false</code>.
				</p>
			</div>
		</div>
	);
}
