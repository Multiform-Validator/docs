import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { LocaleParams } from "@/app/[locale]/types/locale";
import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";

export default async function IsValidImage({
	params: { locale },
}: LocaleParams) {
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
import ImageBuffer from 'image-buffer';

const buffer: Buffer = ImageBuffer;
const isValid = isValidImage(buffer);

console.log(isValid);  // true if the image is valid, false otherwise`}
				</SyntaxHighlighter>

				<p className="mt-4">
					{t("Passing options to the")} <code>isValidImage</code>
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isValidImage } from 'multiform-validator';
import ImageBuffer from 'image-buffer';

const buffer: Buffer = ImageBuffer;
const isValid = isValidImage(buffer, { exclude: ['gif'] });

console.log(isValid);  // true if the image is valid, false otherwise`}
				</SyntaxHighlighter>

				<h2 className="mt-6">{t("Example Usage with Nestjs and Multer")}</h2>
				<p>
					{t(
						"In this example it only allocates 4 bytes for performance reasons, but you can pass the entire file.",
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const filePath = resolve(process.cwd(), 'public', 'assets', 'images');

const fileGetted = resolve(filePath, filename);

const buffer = Buffer.alloc(4);

const fd = fs.openSync(fileGetted, 'r');
fs.readSync(fd, buffer, 0, 4, 0);
fs.closeSync(fd);

const isValidImageResult = isValidImage(buffer);

if (!isValidImageResult) {
    fs.unlinkSync(fileGetted);
    throw new BadRequestException('Invalid image');
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
