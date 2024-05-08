import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsAscii() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isAscii Function Documentation</h1>
				<p>
					The <code>isAscii</code> function checks if the input string contains
					only ASCII characters. It returns <code>true</code> if the string is
					composed of ASCII characters, and <code>false</code> otherwise.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isAscii } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isAscii } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes one parameter:</p>
				<ul>
					<li>
						<code>value</code> (string) - The input string to check for ASCII
						characters.
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Checking if the string contains only ASCII characters
const result1 = isAscii('Hello');
console.log(result1); // true

// Example 2 - Checking a non-ASCII string
const result2 = isAscii('こんにちは');
console.log(result2); // false

// Example 3 - Checking a string with only ASCII characters
const result3 = isAscii('12345');
console.log(result3); // true

// Example 4 - Checking a null value
const result4 = isAscii(null);
console.log(result4); // false

// Example 5 - Checking an undefined value
const result5 = isAscii(undefined);
console.log(result5); // false`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Notes</h2>
				<p>
					The function expects the input value to be passed as a string. It
					checks each character of the string, and if any character has a
					character code greater than 127 (non-ASCII), the function returns{" "}
					<code>false</code>. If the input is not a string or an empty string,
					it throws an error.
				</p>
			</div>
		</div>
	);
}
