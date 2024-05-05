import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsNumber() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isNumber Function Documentation</h1>
				<p>
					The <code>isNumber</code> function checks if the input value is a
					valid number. It returns <code>true</code> if the value is a valid
					number, and <code>false</code> otherwise.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isNumber } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isNumber } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes one parameter:</p>
				<ul>
					<li>
						<code>value</code> (any) - The value to be checked if it represents
						a valid number.
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid numbers
const result1 = isNumber(123); // true
console.log(result1);

// Example 2 - Not a valid number
const result2 = isNumber('abc'); // false
console.log(result2);`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Notes</h2>
				<p>
					The function checks if the input value is not null, undefined, or a
					boolean type. If any of these conditions are met, the function returns
					false since these values cannot represent valid numbers. For all other
					types, the function uses the <code>parseFloat</code> function to
					convert the value to a floating-point number. If the conversion
					results in a valid number and the value is finite (not infinity or
					NaN), the function returns true, indicating that the input value is a
					valid number. Otherwise, it returns false.
				</p>
			</div>
		</div>
	);
}
