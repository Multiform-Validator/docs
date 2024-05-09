import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function ValidateEmail() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">Email Validation Function Documentation</h1>
				<p>
					The <code>validateEmail</code> function is used to validate email
					addresses. It returns an object with two properties:
					&quot;isValid&quot; (boolean) and &quot;errorMsg&quot; (string). The
					&quot;errorMsg&quot; property will contain the error message if the
					email address is invalid, or it will be null if the email address is
					valid.
				</p>

				<p>
					What is the difference between <code>validateEmail</code> and{" "}
					<code>isEmail</code>? isEmail just does simple validations like
					checking if the string has the formatting of an email like several
					validators out there, <code>validateEmail</code> does not, it does
					complex validations and better than that, you can customize the
					validations passing the information in the parameters
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { validateEmail } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { validateEmail } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Function Signature</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`interface OptionsParams {
    maxLength?: number;
    country?: string;
    errorMsg?: (string | null)[];
    validDomains?: boolean | string[];
}

const defaultOptionsParams: OptionsParams = {
    maxLength: 400,
    country: "",
    errorMsg: defaultErrorMsg,
    validDomains: false,
};

function validateEmail(
	email: string,
	{
        maxLength,
        country,
        errorMsg,
        validDomains,
	}: OptionsParams = defaultOptionsParams,
): { isValid: boolean, errorMsg: string | null };`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<ul>
					<li>
						<code>email</code> (string) - The email address to be validated.
					</li>
					<li>
						<code>maxLength</code> (number) [optional] - The maximum length
						allowed for the email address. If not provided, the default value is
						400.
					</li>
					<li>
						<code>country</code> (string) [optional] - The country code to check
						if the email ends with it. If not provided, no country code check
						will be performed.
					</li>
					<li>
						<code>errorMsg</code> (string[]) [optional] - An array of error
						messages to customize the response. If not provided, the function
						will use default error messages.
					</li>
					<li>
						<code>validDomains</code> (boolean | string[]) [optional] - This
						parameter determines whether to check for specific valid email
						domains or not. If set to <code>true</code>, the function will use a
						default list of valid domains. If set to <code>false</code>, no
						domain check will be performed. Alternatively, you can pass an array
						of custom valid domains to perform the check against a specific
						list.
					</li>
				</ul>

				<h2 className="subtitle">Default list of valid domains</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`[
	'@gmail.com',
	'@outlook.com',
	'@yahoo.com',
	'@icloud.com',
	'@hotmail.com',
	'@mail.ru',
	'@yandex.ru',
	'@gmx.com',
	'@zoho.com',
	'@protonmail.com',
	'@protonmail.ch'
];`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Default Error Messages</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`[
	'Invalid value passed',
	'This e-mail is not valid',
	'Email too big, try again',
	'This email is not valid in the country',
	'Email domain is not allowed.',
	'Unknown error',
]`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Examples</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const result1: ValidateFunctions = validateEmail("foor@bar.com", {
    maxLength: 30,
    country: "us",
});
console.log(result1);
// Output: { isValid: false, errorMsg: 'This email is not valid in the country' }

const customErrorMsg: string[] = [
    "Invalid format",
    "Invalid phone number",
    "Unknown error",
];
const result2: ValidateFunctions = validateEmail("foor@bar.com", {
    maxLength: 30,
    country: "br",
    errorMsg: customErrorMsg,
});
console.log(result2);
// Output: { isValid: false, errorMsg: 'This email is not valid in the country' }

const result3: ValidateFunctions = validateEmail("invalid", {
    maxLength: 30,
    errorMsg: ["My own error message"],
});
console.log(result3);
// Output: { isValid: false, errorMsg: 'This e-mail is not valid' }

const result4: ValidateFunctions = validateEmail("joao@myOwnDomain.com", {
    validDomains: ["@myOwnDomain.com"],
});
console.log(result4);
// Output: { isValid: true, errorMsg: null }

const result5: ValidateFunctions = validateEmail("joaoaoao@gmail.com.com", {
    validDomains: true,
});
console.log(result5);
// Output: { isValid: true, errorMsg: null }

const result6: ValidateFunctions = validateEmail("foo@bar.com", {
    maxLength: 25,
    validDomains: true,
});
console.log(result6);
// Output: { isValid: false, errorMsg: 'Email domain is not allowed.' }

const result7: ValidateFunctions = validateEmail("foo@gmail.com", {
    maxLength: 25,
    validDomains: ["@myownemail.com"],
});
console.log(result7);
// Output: { isValid: false, errorMsg: 'Email domain is not allowed.' }

const result8: ValidateFunctions = validateEmail("foo@gmail.com", {
    maxLength: 25,
    errorMsg: [null, null, null, null, "This is my own error for domain"],
    validDomains: ["@myownemail.com"],
});
console.log(result8);
// Output: { isValid: false, errorMsg: 'This is my own error for domain' }

const result9: ValidateFunctions = validateEmail("foo@myownemail.com", {
    maxLength: 25,
    errorMsg: [null, null, null, null, "This is my own error for domain"],
    validDomains: ["@myownemail.com"],
});
console.log(result9);
// Output: { isValid: true, errorMsg: null }

const result10: ValidateFunctions = validateEmail("foo@gmail.com", {
    maxLength: 25,
    errorMsg: ["OwnError1", "OwnError2", "OwnError3", "OwnError4", "OwnError5"],
    validDomains: ["@myownemail.com"],
});
console.log(result10);
// Output: { isValid: false, errorMsg: 'OwnError5' }

const result11: ValidateFunctions = validateEmail("foo@myownemail.com", {
    maxLength: 25,
    errorMsg: ["OwnError1", "OwnError2", "OwnError3", "OwnError4", "OwnError5"],
    validDomains: ["@myownemail.com"],
});
console.log(result11);
// Output: { isValid: true, errorMsg: null }`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}