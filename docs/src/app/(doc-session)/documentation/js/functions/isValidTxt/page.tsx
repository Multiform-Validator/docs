import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import translation from "@/components/Internationalization";

export default function IsValidTxt() {
	const t = (text: string) =>
		translation({ text, subject: "DocumentationJsFunctions" });

	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid">
				<h1>{t("How to use the isValidTxt function")}</h1>

				<p>
					{t("The")} <code>isValidTxt</code>{" "}
					{t(
						"function is used to check whether an txt file is valid or not. It accepts a Buffer as an argument.",
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isValidTxt } from 'multiform-validator';
import TxtBuffer from 'txt-buffer';

const buffer: Buffer = TxtBuffer;
const isValid = isValidTxt(buffer);

console.log(isValid);  // true if the txt is valid, false otherwise`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
