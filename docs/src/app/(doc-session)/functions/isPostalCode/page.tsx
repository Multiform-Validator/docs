import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsPostalCode() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isPostalCode Function Documentation</h1>
				<p>
					The <code>isPostalCode</code> function checks if the input value
					represents a valid postal code for supported countries. It returns{" "}
					<code>true</code> if the value matches the postal code format for any
					of the supported countries, and <code>false</code> otherwise.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isPostalCode } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isPostalCode } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>
					The function takes one parameter, which must be a string representing
					the postal code to be checked.
				</p>
				<ul>
					<li>
						<code>postalCode</code> (string) - The postal code to be checked for
						validity.
					</li>
				</ul>

				<h2 className="subtitle">Supported Countries</h2>
				<p>The function supports postal codes for the following countries:</p>
				<ul>
					<li>United States</li>
					<li>Canada</li>
					<li>United Kingdom</li>
					<li>France</li>
					<li>Netherlands</li>
					<li>Japan</li>
					<li>Spain</li>
					<li>South Africa</li>
					<li>Germany</li>
					<li>Switzerland</li>
					<li>Brazil</li>
					<li>Italy</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid postal codes
const result1 = isPostalCode('12345'); // true (United States)
console.log(result1);

const result2 = isPostalCode('M4B 1B3'); // true (Canada)
console.log(result2);

const result3 = isPostalCode('SW1A 1AA'); // true (United Kingdom)
console.log(result3);

const result4 = isPostalCode('75013'); // true (France)
console.log(result4);

const result5 = isPostalCode('1012'); // true (Netherlands)
console.log(result5);

const result6 = isPostalCode('100-0001'); // true (Japan)
console.log(result6);

// Example 2 - Invalid postal codes
const result7 = isPostalCode('28001'); // true (Spain)
console.log(result7);

const result8 = isPostalCode('8000'); // true (South Africa)
console.log(result8);

const result9 = isPostalCode('13355'); // true (Germany)
console.log(result9);

const result10 = isPostalCode('1002'); // true (Switzerland)
console.log(result10);

const result11 = isPostalCode('10045-123'); // true (Brazil)
console.log(result11);

const result12 = isPostalCode('00100'); // true (Italy)
console.log(result12);

const result13 = isPostalCode('90210'); // true (United States ZIP Code)
console.log(result13);

// Example 3 - Not a valid postal code
const result14 = isPostalCode('Hello'); // false (not a valid postal code)
console.log(result14);`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Notes</h2>
				<p>
					The function uses regular expressions to check the input postal code
					against supported &apos;countries&apos; postal code formats. It
					returns <code>true</code> if the input value matches any of the
					supported postal code formats, and <code>false</code> otherwise.
				</p>
			</div>
		</div>
	);
}
