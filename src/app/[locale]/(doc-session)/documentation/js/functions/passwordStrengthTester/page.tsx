import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function PasswordStrengthTester({
	params: { locale },
}: Readonly<LocaleParams>) {
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
				<ul>
					<li>
						<code>password</code> (string) -{" "}
						{t("The password to be evaluated for strength.")}
					</li>
					<li>
						<code>options</code> (object) - An optional object that can be
						passed to the function to customize the strength criteria.
						<ul>
							<li>
								<code>isVeryWeak</code> (password: string, passwordLength:
								number) -&gt; boolean
							</li>
							<li>
								<code>isWeak</code> (password: string, passwordLength: number)
								-&gt; boolean
							</li>
							<li>
								<code>isRegular</code> (password: string, passwordLength:
								number) -&gt; boolean
							</li>
							<li>
								<code>isStrong</code> (password: string, passwordLength: number)
								-&gt; boolean
							</li>
							<li>
								<code>isVeryStrong</code> (password: string, passwordLength:
								number) -&gt; boolean{" "}
							</li>
						</ul>
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { passwordStrengthTester } from 'multiform-validator';

const password = "P@ssw0rd123";

const customOptions = {
	isVeryWeak: (password, passwordLength) => passwordLength < 6,
	isWeak: (password, passwordLength) => passwordLength >= 6 && passwordLength < 8,
	isRegular: (password, passwordLength) => passwordLength >= 8 && passwordLength < 10,
	isStrong: (password, passwordLength) => passwordLength >= 10 && passwordLength < 12,
	isVeryStrong: (password, passwordLength) => passwordLength >= 12,
};

const customResult = passwordStrengthTester(password, customOptions);

console.log(customResult); // "Strong"
`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
