import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsMD5() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isMD5 Function Documentation</h1>
				<p>
					The <code>isMD5</code> function checks if the input string is a valid
					MD5 hash. It returns <code>true</code> if the input string is a valid
					MD5 hash and follows the supported format, and <code>false</code>{" "}
					otherwise.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isMD5 } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isMD5 } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes one parameter:</p>
				<ul>
					<li>
						<code>value</code> (string) - The input string representing the MD5
						hash to validate. The MD5 hash should be a 32-character string
						consisting of hexadecimal digits (0-9, A-F, a-f).
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid MD5 hashes
const result1 = isMD5('d41d8cd98f00b204e9800998ecf8427e'); // true
console.log(result1);

const result2 = isMD5('6df23dc03f9b54cc38a0fc1483df6e21'); // true
console.log(result2);

// Example 2 - Invalid MD5 hashes
const result3 = isMD5('Hello'); // false
console.log(result3);

const result4 = isMD5('123'); // false
console.log(result4);

const result5 = isMD5('d41d8cd98f00b204e9800998ecf8427e123'); // false
console.log(result5);`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Notes</h2>
				<p>
					The function expects the input MD5 hash to be passed as a string. If
					the input is not a string, the function throws a TypeError. It removes
					leading and trailing whitespace from the input string and checks if
					the resulting string has a valid length (exactly 32 characters). Then,
					it uses a regular expression to verify if the cleaned MD5 hash
					consists only of hexadecimal digits. Additionally, the function checks
					if the MD5 hash is not a known weak hash, such as
					&quot;d41d8cd98f00b204e9800998ecf8427e&quot;. If any of the checks
					fail, the function returns false; otherwise, it returns true,
					indicating that the input string is a valid MD5 hash.
				</p>
			</div>
		</div>
	);
}
