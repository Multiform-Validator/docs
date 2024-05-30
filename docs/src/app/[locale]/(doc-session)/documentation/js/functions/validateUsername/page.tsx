import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { LocaleParams } from "@/app/[locale]/types/locale";
import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";

export default async function ValidateUsername({
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
					Username Validation {t("Function Documentation")}
				</h1>
				<p>
					{t("The")} <code>validateUsername</code>{" "}
					{t(
						'function is used to validate usernames. It returns an object with two properties: "isValid" (boolean) and "errorMsg" (string). The "isValid" property will be true if the username meets the specified criteria, and "errorMsg" will contain the error message if the username is invalid, or it will be null if the username is valid.',
					)}
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "multiform-validator" package:',
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { validateUsername } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { validateUsername } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Function Signature")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`interface OptionsParams {
	minLength?: number;
	maxLength?: number;
	errorMsg?: (string | null)[];
}

const defaultOptionsParams: OptionsParams = {
    minLength: 1,
    maxLength: infinity,
    errorMsg: defaultErrorMsg,
};

function validateUsername(
    username: string,
    { minLength, maxLength, errorMsg }: OptionsParams = defaultOptionsParams,
): { isValid: boolean, errorMsg: string | null };`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<ul>
					<li>
						<code>username</code> (string) -{" "}
						{t("The username to be validated.")}
					</li>
					<li>
						<code>minLength</code> (number){" "}
						{t(
							"[optional] - The minimum length of the username. Default is 1.",
						)}
					</li>
					<li>
						<code>maxLength</code> (number){" "}
						{t(
							"[optional] - The maximum length of the username. Default is Infinity.",
						)}
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
	'Invalid value passed',
	'Username too short',
	'This username is too long',
	'Username cannot contain spaces',
	'Cannot start with a number',
	'Cannot contain only numbers',
	'Unknown error'
]`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const result1 = validateUsername("User999", {
    minLength: 8,
    maxLength: 20,
});
console.log(result1);
// Output: { isValid: true, errorMsg: null }

const customErrorMsg = ["Custom error 1", "Custom error 2"];
const result2 = validateUsername("User999", {
    minLength: 8,
    maxLength: 20,
    errorMsg: customErrorMsg,
});
console.log(result2);
// Output: { isValid: false, errorMsg: 'Username too short' }`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
