import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function PasswordStrengthTester() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">
					Password Strength Tester Function Documentation
				</h1>
				<p>
					The <code>passwordStrengthTester</code> function evaluates the
					strength of a given password and returns the type of password strength
					as a string. The possible strength types are: &quot;veryWeak&quot;,
					&quot;weak&quot;, &quot;regular&quot;, &quot;strong&quot;, or
					&quot;veryStrong&quot;, based on specific criteria.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;password-strength-tester&quot; package:
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { passwordStrengthTester } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { passwordStrengthTester } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<p>
					The function takes one parameter, which must be a string representing
					the password to be evaluated.
				</p>
				<ul>
					<li>
						<code>password</code> (string) - The password to be evaluated for
						strength.
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>
				<pre>
					<code className="language-javascript">
						const result1 = passwordStrengthTester(&apos;12345&apos;); //
						Output: &apos;veryWeak&apos; console.log(result1); const result2 =
						passwordStrengthTester(&apos;abcdef&apos;); // Output:
						&apos;weak&apos; console.log(result2); const result3 =
						passwordStrengthTester(&apos;abc12345&apos;); // Output:
						&apos;regular&apos; console.log(result3); const result4 =
						passwordStrengthTester(&apos;Abc123awdasd&apos;); // Output:
						&apos;strong&apos; console.log(result4); const result5 =
						passwordStrengthTester(&apos;SuperSecurePassword123!@&apos;); //
						Output: &apos;veryStrong&apos; console.log(result5);
					</code>
				</pre>

				<h2 className="subtitle">Notes</h2>
				<p>
					The function checks the length of the password and applies certain
					criteria to classify the password strength. The returned strength type
					is based on the following criteria:
				</p>
				<ul>
					<li>
						&apos;veryWeak&apos; - Password with less than 6 characters,
						consisting only of numbers
					</li>
					<li>
						&apos;weak&apos; - Password with less than 6 characters, consisting
						of numbers and letters
					</li>
					<li>
						&apos;weak&apos; - Password that repeats the same character more
						than 3 times in a row and is less than 10 characters long
					</li>
					<li>
						&apos;weak&apos; - Password between 5 and 8 characters, consisting
						only of numbers
					</li>
					<li>&apos;regular&apos; - Password between 9 and 12 characters</li>
					<li>
						&apos;regular&apos; - Password greater than or equal to 6 and less
						than 8 characters, containing at least one number and one letter
					</li>
					<li>
						&apos;regular&apos; - Password greater than 10 and has characters
						that are repeated more than 5 times in sequence
					</li>
					<li>&apos;strong&apos; - Password between 13 and 16 characters</li>
					<li>
						&apos;strong&apos; - Password with 8 or more characters, containing
						at least one uppercase letter, one number and one lowercase letter
					</li>
					<li>&apos;veryStrong&apos; - Password longer than 16 characters</li>
					<li>
						&apos;veryStrong&apos; - Password with 8 or more characters,
						containing at least one uppercase letter, one number, one special
						character and one lowercase letter
					</li>
				</ul>
			</div>
		</div>
	);
}
