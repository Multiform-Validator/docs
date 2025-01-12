import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function ValidatePassportNumber({
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
					Passport Number Validation {t("Function Documentation")}
				</h1>
				<p>
					{t("The")} <code>validatePassportNumber</code>{" "}
					{t(
						"function is used to validate passport numbers. It returns an object with two properties: 'isValid' (boolean) and 'country' (string). The 'isValid' property will be true if the passport number matches the supported formats, and 'country' property will indicate the country associated with the passport number. If the passport number does not match any supported format, 'isValid' will be false, and 'country' will be null.",
					)}
				</p>

				<h2 className="subtitle">{t("Function Signature")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`function validatePassportNumber(
		passportNumber: string
): { isValid: boolean, country: string | null };`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<ul>
					<li>
						<code>passportNumber</code> (string) -{" "}
						{t("The passport number to be validated.")}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const result1 = validatePassportNumber('A1234567');
console.log(result1);
// Output: { isValid: true, country: 'United States' }

const result2 = validatePassportNumber('123456789');
console.log(result2);
// Output: { isValid: false, country: null }`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Supported Passport Formats")}</h2>
				<ul>
					<li>{t("United States: 9 digits (e.g., '123456789')")}</li>
					<li>
						{t(
							"United Kingdom: 2 uppercase letters followed by 6 digits (e.g., 'AB123456')",
						)}
					</li>
					<li>
						{t(
							"Germany: 2 uppercase letters followed by 8 digits (e.g., 'AB12345678')",
						)}
					</li>
					<li>
						{t(
							"Canada: 1 uppercase letter followed by 7 digits (e.g., 'A1234567')",
						)}
					</li>
					<li>
						{t(
							"Australia: 1 uppercase letter followed by 7 digits (e.g., 'A1234567')",
						)}
					</li>
					<li>{t("Brazil: 9 digits (e.g., '123456789')")}</li>
					<li>
						{t(
							"France: 2 uppercase letters followed by 7 digits (e.g., 'AB1234567')",
						)}
					</li>
					<li>
						{t(
							"Italy: 1 uppercase letter followed by 7 digits (e.g., 'A1234567')",
						)}
					</li>
					<li>
						{t(
							"India: 1 uppercase letter followed by 7 digits (e.g., 'A1234567')",
						)}
					</li>
					<li>
						{t(
							"China: 1 uppercase letter followed by 8 digits (e.g., 'A12345678')",
						)}
					</li>
				</ul>
			</div>
		</div>
	);
}
