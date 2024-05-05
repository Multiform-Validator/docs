import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function validateUSPhoneNumber() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">
					US Phone Number Validation Function Documentation
				</h1>
				<p>
					The <code>validateUSPhoneNumber</code> function is used to validate US
					phone numbers. It supports various formats, including
					&quot;XXX-XXX-XXXX&quot;, &quot;(XXX) XXX-XXXX&quot;, and &quot;1
					(XXX) XXX-XXXX&quot;. It returns an object with two properties:
					&quot;isValid&quot; (boolean) and &quot;errorMsg&quot; (string). The
					&quot;isValid&quot; property will be true if the phone number is
					valid, and &quot;errorMsg&quot; will contain the error message if the
					phone number is invalid, or it will be null if the phone number is
					valid.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { validateUSPhoneNumber } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { validateUSPhoneNumber } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Function Signature</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`function validateUSPhoneNumber(
	phoneNumber: string,
	errorMsg?: string[]
): { isValid: boolean, errorMsg: string | null };`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<ul>
					<li>
						<code>phoneNumber</code> (string) - The US phone number to be
						validated.
					</li>
					<li>
						<code>errorMsg</code> (string[]) [optional] - An array of error
						messages to customize the response. If not provided, the function
						will use default error messages.
					</li>
				</ul>

				<h2 className="subtitle">Default Error Messages</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`[
	'Invalid value passed',
	'Invalid phone number',
	'Unknown error'
]`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const result1 = validateUSPhoneNumber('555-123-4567');
console.log(result1);
// Output: { isValid: true, errorMsg: null }

const customErrorMsg = ['Custom error 1', 'Custom error 2'];
const result2 = validateUSPhoneNumber('(555) 123-4567', customErrorMsg);
console.log(result2);
// Output: { isValid: false, errorMsg: 'Invalid phone number' }`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
