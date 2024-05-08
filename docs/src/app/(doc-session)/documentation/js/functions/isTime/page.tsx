import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsTime() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isTime Function Documentation</h1>
				<p>
					The <code>isTime</code> function checks if the input value represents
					a valid time in the format &quot;hh:mm&quot; or &quot;hh:mm
					AM/PM&quot; or &quot;hh:mm:ss&quot; or &quot;hh:mm:ss AM/PM&quot;. It
					returns <code>true</code> if the value matches any of these formats,
					and <code>false</code> otherwise.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isTime } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isTime } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>
					The function takes one parameter, which must be a string representing
					the time to be checked.
				</p>
				<ul>
					<li>
						<code>time</code> (string) - The time to be checked for validity. It
						must be in one of the supported formats: &quot;hh:mm&quot;,
						&quot;hh:mm AM/PM&quot;, &quot;hh:mm:ss&quot;, or &quot;hh:mm:ss
						AM/PM&quot;.
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid time formats
const result1 = isTime('12:34'); // true
console.log(result1);

const result2 = isTime('12:34 AM'); // true
console.log(result2);

const result3 = isTime('23:59:59'); // true
console.log(result3);

const result4 = isTime('12:34:56 PM'); // true
console.log(result4);

const result5 = isTime('12:34:56 AM'); // true
console.log(result5);

// Example 2 - Invalid time formats
const result6 = isTime('12:34:56XM'); // false (invalid format)
console.log(result6);

const result7 = isTime('25:00'); // false (invalid hour)
console.log(result7);

const result8 = isTime('23:60'); // false (invalid minute)
console.log(result8);

const result9 = isTime('23:59:61'); // false (invalid second)
console.log(result9);`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Notes</h2>
				<p>
					The function uses a regular expression to check if the input time
					string matches any of the supported time formats. It returns{" "}
					<code>true</code> if the input value matches any of the supported
					formats, and <code>false</code> otherwise.
				</p>
			</div>
		</div>
	);
}
