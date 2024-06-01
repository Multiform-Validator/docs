import "@/css/functions.css";

import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types/Params";

export default async function IsValidAudio({
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
				<h1>{t("How to use the isValidAudio function")}</h1>
				<p>
					{t("The")} <code>isValidAudio</code>{" "}
					{t(
						"function is used to check whether an audio file is valid or not. It accepts a Buffer as an argument.",
					)}
				</p>

				<h2 className="mt-6">{t("Types that are validated")}</h2>

				<ul>
					<li>mp3</li>
					<li>wav</li>
				</ul>

				<p>
					{t(
						"You can also pass an options object as a second argument to exclude a specific type.",
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isValidAudio } from 'multiform-validator';
import AudioBuffer from 'audio-buffer';
import AudioBuffer2 from 'audio-buffer2';

const buffer: Buffer = AudioBuffer;
const isValid = isValidAudio(buffer);

console.log(isValid);  // true if the audio is valid, false otherwise

const buffer2: Buffer = AudioBuffer2;
const isValid2 = isValidAudio(buffer2, { exclude: ['wav'] });

console.log(isValid2);  // true if the audio is valid, false otherwise`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
