import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function IsValidVideo({
	params: { locale },
}: LocaleParams) {
	const t = await getScopedI18n("DocumentationJsFunctions");
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent locale={locale} />
			</div>
			<div className="container-fluid">
				<h1>{t("How to use the isValidVideo function")}</h1>

				<p>
					{t("The")} <code>isValidVideo</code>{" "}
					{t(
						"function is used to check whether an video file is valid or not. It accepts a Buffer as an argument.",
					)}
				</p>

				<h2 className="mt-6">{t("Types that are validated")}</h2>

				<ul>
					<li>mkv</li>
					<li>mov</li>
					<li>mp4</li>
				</ul>

				<p>
					{t(
						"You can also pass an options object as a second argument to exclude a specific type.",
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isValidVideo } from 'multiform-validator';
import VideoBuffer from 'video-buffer';
import VideoBuffer2 from 'video-buffer2';

const buffer: Buffer = VideoBuffer;
const isValid = isValidVideo(buffer);

console.log(isValid);  // true if the video is valid, false otherwise

const buffer2: Buffer = VideoBuffer2;
const isValid2 = isValidVideo(buffer2, { exclude: ['mov'] });

console.log(isValid2);  // true if the video is valid, false otherwise`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
