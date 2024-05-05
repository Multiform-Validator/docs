import "@/css/functions.css";

import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsEmail() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isEmail Function Documentation</h1>
				<p>
					The <code>isEmail</code> function checks if the input string is a
					valid email address. It returns <code>true</code> if the email address
					is valid and follows the supported format, and <code>false</code>{" "}
					otherwise.
				</p>
				<p>
					This function just checks the syntax of the email to see if it&apos;s
					valid or not, if you need a stronger validation, use{" "}
					<Link href="./vLinklidateEmail">
						<code>validateEmail</code>
					</Link>
				</p>
				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isEmail } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isEmail } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>The function takes one parameter:</p>
				<ul>
					<li>
						<code>email</code> (string) - The input string representing the
						email address to validate.
					</li>
				</ul>

				<h2 className="subtitle">Example</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example - Valid email address
const result1 = isEmail('foor@bar.com');
console.log(result1); // true`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Notes</h2>
				<p>
					The function expects the input email to be passed as a string. If the
					input is not a string or an empty string, the function returns{" "}
					<code>false</code>. It uses a regular expression to validate the email
					address format. The regular expression checks for the correct
					structure of the email address, ensuring it contains an &quot;@&quot;
					symbol and a valid domain with at least two letters (e.g.,
					&quot;.com&quot;, &quot;.org&quot;, etc.). It also performs additional
					checks to ensure that the first character of the email address is not
					a number and that there are no numbers immediately after the
					&quot;@&quot; symbol and the last dot in the domain.
				</p>
			</div>
		</div>
	);
}
