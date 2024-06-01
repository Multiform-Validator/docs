import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function PasswordStrengthTester({
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
					Password Strength Tester {t("Function Documentation")}
				</h1>
				<p>
					{t("The")} <code>passwordStrengthTester</code>{" "}
					{t(
						'function evaluates the strength of a given password and returns the type of password strength as a string. The possible strength types are: "veryWeak", "weak", "regular", "strong", or "veryStrong", based on specific criteria.',
					)}
				</p>

				<h2 className="subtitle">Import</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "password-strength-tester" package:',
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { passwordStrengthTester } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>require</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { passwordStrengthTester } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<p>
					{t(
						"The function takes one parameter, which must be a string representing the password to be evaluated.",
					)}
				</p>
				<ul>
					<li>
						<code>password</code> (string) -{" "}
						{t("The password to be evaluated for strength.")}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const result1 = passwordStrengthTester("12345");
console.log(result1);  // Output: veryWeak

const result2 = passwordStrengthTester("abcdef");
console.log(result2); // Output: weak

const result3 = passwordStrengthTester("abc12345");
console.log(result3); // Output: regular

const result4 = passwordStrengthTester("Abc123awdasd");
console.log(result4); // Output: strong

const result5 = passwordStrengthTester("SuperSecurePassword123!@");
console.log(result5); // Output: veryStrong`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>
					{t(
						"The function checks the length of the password and applies certain criteria to classify the password strength. The returned strength type is based on the following criteria:",
					)}
				</p>
				<ul>
					<li>
						{t(
							"'veryWeak' - Password with less than 6 characters, consisting only of numbers",
						)}
					</li>
					<li>
						{t(
							"'weak' - Password with less than 6 characters, consisting of numbers and letters",
						)}
					</li>
					<li>
						{t(
							"'weak' - Password that repeats the same character more than 3 times in a row and is less than 10 characters long",
						)}
					</li>
					<li>
						{t(
							"'weak' - Password between 5 and 8 characters, consisting only of numbers",
						)}
					</li>
					<li>{t("'regular' - Password between 9 and 12 characters")}</li>
					<li>
						{t(
							"'regular' - Password greater than or equal to 6 and less than 8 characters, containing at least one number and one letter",
						)}
					</li>
					<li>
						{t(
							"'regular' - Password greater than 10 and has characters that are repeated more than 5 times in sequence",
						)}
					</li>
					<li>{t("'strong' - Password between 13 and 16 characters")}</li>
					<li>
						{t(
							"'strong' - Password with 8 or more characters, containing at least one uppercase letter, one number and one lowercase letter",
						)}
					</li>
					<li>{t("'veryStrong' - Password longer than 16 characters")}</li>
					<li>
						{t(
							"'veryStrong' - Password with 8 or more characters, containing at least one uppercase letter, one number, one special character and one lowercase letter",
						)}
					</li>
				</ul>
			</div>
		</div>
	);
}
