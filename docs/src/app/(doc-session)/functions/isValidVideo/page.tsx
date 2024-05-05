import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsValidVideo() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid">
				<h1>How to use the isValidVideo function</h1>
				<p>
					The <code>isValidVideo</code> function is used to check whether an
					video file is valid or not. It accepts a Buffer as an argument.
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isValidVideo } from 'multiform-validator';
import VideoBuffer from 'video-buffer';

const buffer: Buffer = VideoBuffer;
const isValid = isValidVideo(buffer);

console.log(isValid);  // true if the video is valid, false otherwise`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
