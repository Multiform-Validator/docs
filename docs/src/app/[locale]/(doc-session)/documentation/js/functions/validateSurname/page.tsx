import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { LocaleParams } from "@/app/[locale]/types/locale";
import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";

export default async function ValidateSurname({
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
					Surname Validation {t("Function Documentation")}
				</h1>
				<p>
					{t("The")} <code>validateSurname</code>{" "}
					{t(
						"function is used to validate surnames. It returns an object with two properties: 'isValid' (boolean) and 'errorMsg' (string). The 'isValid' property will be true if the surname meets the specified criteria, and 'errorMsg' will contain the error message if the surname is invalid, or it will be null if the surname is valid.",
					)}
				</p>

				<h2 className="subtitle">{t("Function Signature")}</h2>
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

				<h2 className="subtitle">{t("Parameters")}</h2>
				<ul>
					<li>
						<code>surname</code> (string) - {t("The surname to be validated.")}
					</li>
					<li>
						<code>minLength</code> (number) {t("[optional]")} -{" "}
						{t("The minimum length of the surname. Default is 1.")}
					</li>
					<li>
						<code>maxLength</code> (number) {t("[optional]")} -{" "}
						{t("The maximum length of the surname. Default is 25.")}
					</li>
					<li>
						<code>errorMsg</code> (string[]) {t("[optional]")} -{" "}
						{t(
							"An array of error messages to customize the response. If not provided, the function will use default error messages.",
						)}
					</li>
				</ul>

				<h2 className="subtitle">{t("Default Error Messages")}</h2>
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

				<h2 className="subtitle">{t("Examples")}</h2>
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
