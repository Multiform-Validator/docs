import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function IsValidImage() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid">
				<h1>How to use the isValidImage function</h1>
				<p>
					The <code>isValidImage</code> function is used to check whether an
					image file is valid or not. It accepts a Buffer as an argument.
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isValidImage } from 'multiform-validator';
import ImageBuffer from 'image-buffer';

const buffer: Buffer = ImageBuffer;
const isValid = isValidImage(buffer);

console.log(isValid);  // true if the image is valid, false otherwise`}
				</SyntaxHighlighter>

				<h2 className="mt-6">Example Usage with Nestjs and Multer</h2>

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
				<p>
					First, import the <code>isValidImage</code> function from
					&apos;multiform-validator&apos;. Then, define the path to the image
					you want to check. Call the <code>isValidImage</code> function with
					the image path as an argument. The function will return{" "}
					<code>true</code> if the image is valid and <code>false</code> if it
					is not.
				</p>
			</div>
		</div>
	);
}
