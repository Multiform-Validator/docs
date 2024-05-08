import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsDate() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isDate Function Documentation</h1>
				<p>
					The <code>isDate</code> function checks if the input string is a valid
					date.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isDate } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isDate } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes one parameter:</p>
				<ul>
					<li>
						<code>value</code> (string) - The input string representing the date
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid date
const result1 = isDate("1999-12-31");
console.log(result1); // true

// Example 2 - Valid date
const result2 = isDate("2021-01-01");
console.log(result2); // true

// Example 3 - Invalid date
const result3 = isDate("1234 5678 9012 3456");
console.log(result3); // false`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Notes</h2>
				<p>The function expects the input value to be passed as a string.</p>
			</div>
		</div>
	);
}
