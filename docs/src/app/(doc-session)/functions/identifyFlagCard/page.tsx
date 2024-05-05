import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IdentifyFlagCard() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">identifyFlagCard Function Documentation</h1>
				<p>
					The <code>identifyFlagCard</code> function is used to identify the
					credit card flag based on the first digits of the card number. It
					returns the name of the card flag as a string.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { identifyFlagCard } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p className="mt-3">
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { identifyFlagCard } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes one parameter:</p>
				<ul>
					<li>
						<code>cardNumber</code> (string) - The credit card number for which
						to identify the flag based on the first digits.
					</li>
				</ul>

				<h2 className="subtitle">Example</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Identifying the card flag based on the first digits
const result = identifyFlagCard('6062 8226 8644 9791');
console.log(result); // Output: "Discover"`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Notes</h2>
				<p>
					The function expects the credit card number to be passed as a string.
					It uses the first digits of the card number to identify the card flag
					and returns the corresponding flag name as a string. If the card flag
					cannot be identified or the input is not a string, it returns
					&quot;Unknown&quot;.
				</p>
			</div>
		</div>
	);
}
