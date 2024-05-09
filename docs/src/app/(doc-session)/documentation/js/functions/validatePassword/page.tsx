import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function ValidatePassword() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">Password Validation Function Documentation</h1>
				<p>
					The <code>validatePassword</code> function is used to validate
					passwords. It returns an object with two properties:
					&quot;isValid&quot; (boolean) and &quot;errorMsg&quot; (string). The
					&quot;isValid&quot; property will be true if the password meets the
					specified criteria, and &quot;errorMsg&quot; will contain the error
					message if the password is invalid, or it will be null if the password
					is valid.
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					The function can be imported using ES6 syntax from the
					&quot;multiform-validator&quot; package:
				</p>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { validatePassword } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					Alternatively, you can import the function using CommonJS syntax with{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { validatePassword } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Function Signature</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`interface Options {
    requireUppercase?: boolean;
    requireSpecialChar?: boolean;
    requireNumber?: boolean;
    requireString?: boolean;
}

interface OptionsParams {
    minLength?: number;
    maxLength?: number;
    options?: Options;
    errorMsg?: (string | null)[];
}

const defaultOptionsParams: OptionsParams = {
    minLength: 1,
    maxLength: infinity,
    options: {
        requireUppercase: false,
        requireSpecialChar: false,
        requireNumber: false,
        requireString: false,
    },
    errorMsg: defaultErrorMsg,
};

function validatePassword(
	password: string,
	{
		minLength,
		maxLength,
		options,
		errorMsg,
	}: OptionsParams = defaultOptionsParams,
): { isValid: boolean, errorMsg: string | null };`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<ul>
					<li>
						<code>password</code> (string) - The password to be validated.
					</li>
					<li>
						<code>minLength</code> (number) [optional] - The minimum length
						allowed for the password. Default value: 1.
					</li>
					<li>
						<code>maxLength</code> (number) [optional] - The maximum length
						allowed for the password. Default value: Infinity.
					</li>
					<li>
						<code>options</code> (object) [optional] - An object with the
						following optional properties:
						<ul>
							<li>
								<code>requireUppercase</code> (boolean) - Whether the password
								requires at least one uppercase letter. Default value: false.
							</li>
							<li>
								<code>requireSpecialChar</code> (boolean) - Whether the password
								requires at least one special character{" "}
								{`(e.g., !@#$%^&*(),.?":{}|
												<>)`}
								. Default value: false.
							</li>
							<li>
								<code>requireNumber</code> (boolean) - Whether the password
								requires at least one number. Default value: false.
							</li>
							<li>
								<code>requireString</code> (boolean) - Whether the password
								requires at least one letter. Default value: false.
							</li>
						</ul>
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
	'This password is too long',
	'Password too short',
	'Requires at least one capital letter',
	'Requires at least one special character',
	'Requires at least one number',
	'Requires at least one letter',
	'Unknown error',
]`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Examples</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const defaultErrorMsg = [...];

// ... validatePassword function ...

// Examples:

// Example 1: Valid password with default options
const result1 = validatePassword("MyP@ssw0rd", { minLength: 8, maxLength: 20 });
console.log(result1);
// Output: { isValid: true, errorMsg: null }

// Example 2: Weak password with missing uppercase letter
const result2 = validatePassword("weakpassword1!", {
	minLength: 8,
	maxLength: 20,
	options: {
		requireUppercase: true,
	},
});
console.log(result2);
// Output: { isValid: false, errorMsg: 'Requires at least one capital letter' }

// Example 3: Invalid password with too short length
const result3 = validatePassword("Pwd1!", {
	minLength: 10,
	maxLength: 20,
	options: {
		requireUppercase: true,
		requireSpecialChar: true,
	},
});
console.log(result3);
// Output: { isValid: false, errorMsg: 'password too short' }

// Example 4: Valid password with custom error message
const myCustomErrorMsg = [
	"Custom error: Invalid format",
	"Custom error: Invalid password",
	"Custom error: Unknown error",
];
const result4 = validatePassword("MyP@ssw0rd", {
	minLength: 8,
	maxLength: 20,
	options: {
		requireUppercase: true,
		requireSpecialChar: true,
		requireNumber: true,
		requireString: true,
	},
	errorMsg: myCustomErrorMsg,
});
console.log(result4);
// Output: { isValid: true, errorMsg: null }

// Example 5: Invalid password with missing special character
const result5 = validatePassword("WeakPassword1", {
	minLength: 8,
	maxLength: 20,
	options: {
		requireSpecialChar: true,
	},
});
console.log(result5);
// Output: { isValid: false, errorMsg: 'Requires at least one special character' }

/*
Example 6: Valid password with custom error message
for special character requirement
*/
const myCustomErrorMsg2 = [...defaultErrorMsg];
myCustomErrorMsg2[3] = "Custom error: Requires at least one special character";
const result6 = validatePassword("MyP@ssw0rd", {
	minLength: 8,
	maxLength: 20,
	options: { requireSpecialChar: true },
	errorMsg: myCustomErrorMsg2,
});
console.log(result6);
// Output: { isValid: true, errorMsg: null }

// Example 7: Invalid password with missing number
const result7 = validatePassword("StrongPwd@", {
	minLength: 8,
	maxLength: 20,
	options: { requireNumber: true },
});
console.log(result7);
// Output: { isValid: false, errorMsg: 'Requires at least one number' }

// Example 8: Invalid password with missing letter
const result8 = validatePassword("12345@#", {
	minLength: 8,
	maxLength: 20,
	options: { requireString: true },
});
console.log(result8);
// Output: { isValid: false, errorMsg: 'Requires at least one letter' }

// Example 9: Invalid password exceeding maximum length
const result9 = validatePassword("VeryLongPassword1234567890!@#$%^", {
	minLength: 8,
	maxLength: 20,
});
console.log(result9);
// Output: { isValid: false, errorMsg: 'This password is too long' }

// Example 10: Invalid input (non-string password)
try {
	const result10 = validatePassword(123456, {
		minLength: 8,
		maxLength: 20,
		options: { requireUppercase: true },
	});
	console.log(result10); // This will not execute
} catch (error) {
	console.log(error.message); // Output: "The input should be a string."
}`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
