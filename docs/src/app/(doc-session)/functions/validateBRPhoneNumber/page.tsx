import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function ValidateBRPhoneNumber() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">
					BR Phone Number Validation Function Documentation
				</h1>
				<p>
					The <code>validateBRPhoneNumber</code> function is used to validate
					Brazilian phone numbers. It returns an object with two properties:
					&quot;isValid&quot; (boolean) and &quot;errorMsg&quot; (string). The
					&quot;errorMsg&quot; property will contain the error message if the
					phone number is invalid, or it will be null if the phone number is
					valid.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;br-phone-number-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { validateBRPhoneNumber } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { validateBRPhoneNumber } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes two parameters:</p>
				<ul>
					<li>
						<code>phoneNumber</code> (string) - The Brazilian phone number to be
						validated.
					</li>
					<li>
						<code>errorMsg</code> (string[]) [optional] - An array of error
						messages to customize the response. If not provided, the function
						will use default error messages.
					</li>
				</ul>

				<h2 className="subtitle">Default Error Messages</h2>
				<p>The default error messages are as follows:</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`[
	'Invalid value passed',
	'Invalid phone number',
	'Unknown error'
]`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const result1 = validateBRPhoneNumber('(11) 98765-4321');
console.log(result1);
// Output: { isValid: true, errorMsg: null }

const customErrorMsg = ['Invalid format', 'Invalid phone number', 'Unknown error'];
const result2 = validateBRPhoneNumber('(11) 98765-4321', customErrorMsg);
console.log(result2);
// Output: { isValid: true, errorMsg: null }

const result3 = validateBRPhoneNumber('invalid');
console.log(result3);
// Output: { isValid: false, errorMsg: 'Invalid value passed' }

const result4 = validateBRPhoneNumber('(11) 1234-5678', customErrorMsg);
console.log(result4);
// Output: { isValid: false, errorMsg: 'Invalid phone number' }`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
