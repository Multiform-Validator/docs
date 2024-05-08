import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function ValidateTextarea() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1>validateTextarea Function</h1>
				<p>
					This function is a text area validation utility that checks the
					validity of a given textarea string based on certain criteria.
				</p>

				<h2>Function Signature</h2>

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

				<h2>Parameters</h2>
				<ul>
					<li>
						<strong>textarea</strong> (string): The input textarea string to be
						validated.
					</li>
					<li>
						<strong>isRequired</strong> (boolean, optional, default: false): A
						flag to determine if the textarea is required.
					</li>
					<li>
						<strong>maxLength</strong> (number, optional, default: 50): The
						maximum allowed length for the textarea.
					</li>
					<li>
						<strong>errorMsg</strong> (string array, optional, default:
						predefined messages): An array of custom error messages for
						different validation conditions. The array should contain three
						elements corresponding to different error scenarios. If not
						provided, default error messages will be used. Default Error
						Messages:
						<ul>
							<li>Index 0: &apos;This textarea is too big&apos;</li>
							<li>Index 1: &apos;Can not be empty&apos;</li>
							<li>Index 2: &apos;Unknown error&apos;</li>
						</ul>
					</li>
				</ul>

				<h2>Return Value</h2>
				<p>
					The function returns an object with two properties:
					<ul>
						<li>
							<strong>isValid</strong> (boolean): Indicates if the textarea is
							valid based on the given criteria.
						</li>
						<li>
							<strong>errorMsg</strong> (string): Contains the corresponding
							error message, if any, based on the validation result.
						</li>
					</ul>
				</p>

				<h2>Usage Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`validateTextarea("Some text content"); // Example 1
// Returns: { isValid: true, errorMsg: null }

validateTextarea("", { isRequired: true }); // Example 2
// Returns: { isValid: false, errorMsg: 'Can not be empty' }

validateTextarea("Very long text...", { isRequired: false, maxLength: 10 }); // Example 3
// Returns: { isValid: false, errorMsg: 'This textarea is too big' }`}
				</SyntaxHighlighter>

				<p>
					<strong>Note:</strong> The examples provided demonstrate how to use
					the function with different parameters and show the expected return
					values.
				</p>
			</div>
		</div>
	);
}
