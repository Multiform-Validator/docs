import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function ValidateName({
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
				<h1 className="title">Name Validation {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>validateName</code>{" "}
					{t(
						"Function is used to validate names. It returns an object with two properties: 'isValid' (boolean) and 'errorMsg' (string). The 'errorMsg' property will contain the error message if the name is invalid, or it will be null if the name is valid.",
					)}
				</p>

				<h2 className="subtitle">{t("Function Signature")}</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`function validateName(
        name: string,
        {
            minLength?: number,
            maxLength?: number,
            errorMsg?: string[]
        }
): { isValid: boolean, errorMsg: string | null };`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<ul>
					<li>
						<code>name</code> (string) - {t("The name to be validated.")}
					</li>
					<li>
						<code>minLength</code> (number) -{" "}
						{t(
							"[optional] The minimum length allowed for the name. Default value: 1.",
						)}
					</li>
					<li>
						<code>maxLength</code> (number) -{" "}
						{t(
							"[optional] The maximum length allowed for the name. Default value: 20.",
						)}
					</li>
					<li>
						<code>errorMsg</code> (string[]) -{" "}
						{t(
							"[optional] - An array of error messages to customize the response. If not provided, the function will use default error messages.",
						)}
					</li>
				</ul>

				<h2 className="subtitle">{t("Default Error Messages")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`[
	'Invalid value passed',
	'Name cannot contain numbers',
	'Name cannot contain special characters',
	'This name is not valid',
	'Name too big, try again',
	'Unknown error',
]`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const result1 = validateName("John", {
    minLength: 2,
    maxLength: 20,
});
console.log(result1);
// Output: { isValid: true, errorMsg: null }

const result2 = validateName("J0hn");
console.log(result2);
// Output: { isValid: false, errorMsg: 'Name cannot contain numbers' }

const result3 = validateName("John$");
console.log(result3);
// Output: { isValid: false, errorMsg: 'Name cannot contain special characters' }

const result4 = validateName("NameWithTwentyOneCharacters");
console.log(result4);
// Output: { isValid: false, errorMsg: 'Name too big, try again' }`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
