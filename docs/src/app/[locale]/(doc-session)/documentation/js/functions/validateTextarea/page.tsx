import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function ValidateTextarea({
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
				<h1>
					<p>
						<code>validateTextarea</code>
					</p>{" "}
					{t("Function Documentation")}
				</h1>
				<p>
					{t(
						"This function is a text area validation utility that checks the validity of a given textarea string based on certain criteria.",
					)}
				</p>

				<h2>{t("Function Signature")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`/**
* @param {string} textarea - The input textarea string to be validated.
* @param {boolean} [isRequired=false] - A boolean flag to determine if the textarea is required (default: false).
* @param {number} [maxLength=50] - The maximum allowed length for the textarea (default: 50).
* @param {string[]} [errorMsg=defaultErrorMsg] - An array of custom error messages for different validation conditions (default: predefined messages).
* @default isRequired boolean: default: false
* @default maxLength number: default: 50
* @example validateTextarea();
* @example validateTextarea();
* @example validateTextarea();
* @description This function returns an object with two properties: 'isValid' (boolean) and 'errorMsg' (string).
* The 'isValid' property indicates if the textarea is valid based on the given criteria, and 'errorMsg' contains the corresponding error message, if any.
*/`}
				</SyntaxHighlighter>

				<h2>{t("Parameters")}</h2>
				<ul>
					<li>
						<strong>textarea</strong> (string):{" "}
						{t("The input textarea string to be validated.")}
					</li>
					<li>
						<strong>isRequired</strong> (boolean, optional, default: false):{" "}
						{t("A flag to determine if the textarea is required.")}
					</li>
					<li>
						<strong>maxLength</strong> (number, optional, default: 50):{" "}
						{t("The maximum allowed length for the textarea.")}
					</li>
					<li>
						<strong>errorMsg</strong> (string array, optional, default:
						predefined messages):{" "}
						{t(
							"An array of custom error messages for different validation conditions. The array should contain three elements corresponding to different error scenarios. If not provided, default error messages will be used. Default Error Messages:",
						)}
						<ul>
							<li>{t('Index 0: "This textarea is too big"')}</li>
							<li>{t('Index 1: "Can not be empty"')}</li>
							<li>{t('Index 2: "Unknown error"')}</li>
						</ul>
					</li>
				</ul>

				<h2>{t("Return Value")}</h2>
				<p>
					{t("The function returns an object with two properties:")}
					<ul>
						<li>
							<strong>isValid</strong> (boolean):{" "}
							{t(
								"Indicates if the textarea is valid based on the given criteria.",
							)}
						</li>
						<li>
							<strong>errorMsg</strong> (string):{" "}
							{t(
								"Contains the corresponding error message, if any, based on the validation result.",
							)}
						</li>
					</ul>
				</p>

				<h2>{t("Usage Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`validateTextarea("Some text content"); // Example 1
// Returns: { isValid: true, errorMsg: null }

validateTextarea("", { isRequired: true }); // Example 2
// Returns: { isValid: false, errorMsg: 'Can not be empty' }

validateTextarea("Very long text...", { isRequired: false, maxLength: 10 }); // Example 3
// Returns: { isValid: false, errorMsg: 'This textarea is too big' }`}
				</SyntaxHighlighter>

				<p>
					<strong>{t("Note:")}</strong>{" "}
					{t(
						"The examples provided demonstrate how to use the function with different parameters and show the expected return values.",
					)}
				</p>
			</div>
		</div>
	);
}
