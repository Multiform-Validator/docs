import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function IsValidImage({
	params: { locale },
}: Readonly<LocaleParams>) {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("DocumentationJsFunctions");
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent locale={locale} />
			</div>
			<div className="container-fluid">
				<h1>{t("How to use the isValidImage function")}</h1>
				<p>
					{t("The")} <code>isValidImage</code>{" "}
					{t(
						"function is used to check whether an image file is valid or not. It accepts a Buffer as an argument.",
					)}
				</p>

				<h2 className="mt-6">{t("Types that are validated")}</h2>

				<ul>
					<li>jpeg</li>
					<li>png</li>
					<li>gif</li>
					<li>ico</li>
				</ul>

				<p>
					{t(
						"You can also pass an options object as a second argument to exclude a specific type.",
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isValidImage } from 'multiform-validator';
import * as path from 'path';
import * as fs from 'fs';

const filePath = path.join(__dirname, 'image.png');
const fileBuffer = fs.readFileSync(filePath);

const isValid = isValidImage(fileBuffer);

console.log(isValid);  // true if the image is valid, false otherwise`}
				</SyntaxHighlighter>

				<p className="mt-4">
					{t("Passing options to the")} <code>isValidImage</code>
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isValidImage } from 'multiform-validator';
import * as path from 'path';
import * as fs from 'fs';

const filePath = path.join(__dirname, 'image.png');
const fileBuffer = fs.readFileSync(filePath);

const isValid = isValidImage(fileBuffer, { exclude: ['gif'] });

console.log(isValid);  // true if the image is valid, false otherwise`}
				</SyntaxHighlighter>

				<h2 className="mt-6">{t("Example Usage with Nestjs and Multer")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`if (!isValidImage(file.buffer)) {
	throw new BadRequestException("This is not a valid image");
}`}
				</SyntaxHighlighter>
				<p className="mt-6">
					{t("First, import the")} <code>isValidImage</code>{" "}
					{t(
						"function from 'multiform-validator'. Then, define the path to the image you want to check. Call the",
					)}{" "}
					<code>isValidImage</code>{" "}
					{t(
						"function with the image path as an argument. The function will return",
					)}{" "}
					<code>true</code> {t("if the image is valid and")} <code>false</code>{" "}
					{t("if it is not.")}
				</p>
			</div>
		</div>
	);
}
