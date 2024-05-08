import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function ValidateSurname() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">Surname Validation Function Documentation</h1>
				<p>
					The <code>validateSurname</code> function is used to validate
					surnames. It returns an object with two properties:
					&apos;isValid&apos; (boolean) and &apos;errorMsg&apos; (string). The
					&apos;isValid&apos; property will be true if the surname meets the
					specified criteria, and &apos;errorMsg&apos; will contain the error
					message if the surname is invalid, or it will be null if the surname
					is valid.
				</p>

				<h2 className="subtitle">Function Signature</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`function validateSurname(
	surname: string,
	{
		minLength?: number,
		maxLength?: number,
		errorMsg?: string[]
	}
): { isValid: boolean, errorMsg: string | null };`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<ul>
					<li>
						<code>surname</code> (string) - The surname to be validated.
					</li>
					<li>
						<code>minLength</code> (number) [optional] - The minimum length of
						the surname. Default is 1.
					</li>
					<li>
						<code>maxLength</code> (number) [optional] - The maximum length of
						the surname. Default is 25.
					</li>
					<li>
						<code>errorMsg</code> (string[]) [optional] - An array of error
						messages to customize the response. If not provided, the function
						will use default error messages.
					</li>
				</ul>

				<h2 className="subtitle">Default Error Messages</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`[
	'Invalid value passed',
	'Surname cannot contain numbers',
	'Surname cannot contain special characters',
	'This surname is not valid',
	'Surname too big, try again',
	'Unknown error',
]`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Examples</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const result1 = validateSurname("Jackson", {
    minLength: 3,
    maxLength: 25,
});
console.log(result1);
// Output: { isValid: true, errorMsg: null }

const customErrorMsg = [null, "Custom error 2"];
const result2 = validateSurname("J@ckson", {
    minLength: 3,
    maxLength: 25,
    errorMsg: customErrorMsg,
});
console.log(result2);
// Output: { isValid: false, errorMsg: 'Surname cannot contain special characters' }`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
