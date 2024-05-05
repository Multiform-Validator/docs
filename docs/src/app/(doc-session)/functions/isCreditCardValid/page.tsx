import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsCreditCard() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isCreditCardValid Function Documentation</h1>
				<p>
					The <code>isCreditCardValid</code> function checks if the input string
					represents a valid credit card number using the Luhn algorithm. It
					returns <code>true</code> if the credit card number is valid, and{" "}
					<code>false</code> otherwise.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isCreditCardValid } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isCreditCardValid } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes one parameter:</p>
				<ul>
					<li>
						<code>cardNumber</code> (string) - The input string representing the
						credit card number to validate.
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid credit card number with spaces
const result1 = isCreditCardValid('6062 8226 8644 9791');
console.log(result1); // true

// Example 2 - Valid credit card number without spaces
const result2 = isCreditCardValid('6062822686449791');
console.log(result2); // true

// Example 3 - Invalid credit card number (does not pass the Luhn algorithm)
const result3 = isCreditCardValid('1234 5678 9012 3456');
console.log(result3); // false`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Notes</h2>
				<p>
					The function expects the input value to be passed as a string
					representing a credit card number. It removes any non-digit characters
					and applies the Luhn algorithm to validate the credit card number. If
					the input is not a string, the function throws an error.
				</p>
			</div>
		</div>
	);
}
