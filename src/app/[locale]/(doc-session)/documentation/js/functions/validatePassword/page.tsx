import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function ValidatePassword({
	params: { locale },
}: LocaleParams) {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("DocumentationJsFunctions");
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent locale={locale} />
			</div>
			<div className="container-fluid container">
				<h1 className="title">
					Password Validation {t("Function Documentation")}
				</h1>
				<p>
					{t("The")} <code>validatePassword</code>{" "}
					{t(
						'function is used to validate passwords. It returns an object with two properties: "isValid" (boolean) and "errorMsg" (string). The "isValid" property will be true if the password meets the specified criteria, and "errorMsg" will contain the error message if the password is invalid, or it will be null if the password is valid.',
					)}
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "multiform-validator" package:',
					)}
				</p>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { validatePassword } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { validatePassword } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Function Signature")}</h2>
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

				<h2 className="subtitle">{t("Parameters")}</h2>
				<ul>
					<li>
						<code>password</code> (string) -{" "}
						{t("The password to be validated.")}
					</li>
					<li>
						<code>minLength</code> (number) {t("[optional]")} -{" "}
						{t(
							"The minimum length allowed for the password. Default value: 1.",
						)}
					</li>
					<li>
						<code>maxLength</code> (number) {t("[optional]")} -{" "}
						{t(
							"The maximum length allowed for the password. Default value: Infinity.",
						)}
					</li>
					<li>
						<code>options</code> (object){" "}
						{t(
							"[optional] - An object with the following optional properties:",
						)}
						<ul>
							<li>
								<code>requireUppercase</code> (boolean) -{" "}
								{t(
									"Whether the password requires at least one uppercase letter. Default value: false.",
								)}
							</li>
							<li>
								<code>requireSpecialChar</code> (boolean) -{" "}
								{t(
									"Whether the password requires at least one special character",
								)}{" "}
								{`(e.g., !@#$%^&*(),.?":{}|
												<>)`}
								. {t("Default value: false.")}
							</li>
							<li>
								<code>requireNumber</code> (boolean) -{" "}
								{t(
									"Whether the password requires at least one number. Default value: false.",
								)}
							</li>
							<li>
								<code>requireString</code> (boolean) -{" "}
								{t(
									"Whether the password requires at least one letter. Default value: false.",
								)}
							</li>
						</ul>
					</li>
					<li>
						<code>errorMsg</code> (string[]){" "}
						{t(
							"[optional] - An array of error messages to customize the response. If not provided, the function will use default error messages.",
						)}
					</li>
				</ul>

				<h2 className="subtitle">{t("Default Error Messages")}</h2>
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

				<h2 className="subtitle">{t("Examples")}</h2>
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
