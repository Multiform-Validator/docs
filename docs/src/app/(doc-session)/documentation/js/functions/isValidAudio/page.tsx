import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsValidAudio() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid">
				<h1>How to use the isValidAudio function</h1>
				<p>
					The <code>isValidAudio</code> function is used to check whether an
					audio file is valid or not. It accepts a Buffer as an argument.
				</p>

				<h2 className="mt-6">Types that are validated</h2>

				<ul>
					<li>mp3</li>
					<li>wav</li>
				</ul>

				<p>
					You can also pass an options object as a second argument to exclude a
					specific type.
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
