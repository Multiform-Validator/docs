import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsMACAddress() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isMACAddress Function Documentation</h1>
				<p>
					The <code>isMACAddress</code> function checks if the input string is a
					valid MAC address. It returns <code>true</code> if the MAC address is
					valid and follows the supported formats, and <code>false</code>{" "}
					otherwise.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isMACAddress } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isMACAddress } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes one parameter:</p>
				<ul>
					<li>
						<code>mac</code> (string) - The input string representing the MAC
						address to validate. The MAC address can be in the following
						formats: &quot;001A2B3C4D5E&quot;, &quot;00:1A:2B:3C:4D:5E&quot;, or
						&quot;00-1A-2B-3C-4D-5E&quot;.
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid MAC addresses
const result1 = isMACAddress('001A2B3C4D5E'); // true
console.log(result1);

const result2 = isMACAddress('00:1A:2B:3C:4D:5E'); // true
console.log(result2);

const result3 = isMACAddress('00-1A-2B-3C-4D-5E'); // true
console.log(result3);

// Example 2 - Invalid MAC address
const result4 = isMACAddress('Hello'); // false
console.log(result4);`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Notes</h2>
				<p>
					The function expects the input MAC address to be passed as a string.
					If the input is not a string, the function throws a TypeError. It
					removes all non-alphanumeric characters from the input string using a
					regular expression and checks if the resulting string has a valid
					length (exactly 12 characters). Then, it uses another regular
					expression to verify if the cleaned MAC address matches the supported
					pattern. The supported pattern is a 12-character string consisting of
					hexadecimal digits (0-9, A-F, a-f), with optional separators
					(&quot;:&quot;, &quot;-&quot;) between pairs of hexadecimal digits.
				</p>
			</div>
		</div>
	);
}
