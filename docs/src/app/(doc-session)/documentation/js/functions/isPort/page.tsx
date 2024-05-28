import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";
import translation from "@/components/Internationalization";

export default function IsPort() {
	const t = (text: string) =>
		translation({ text, subject: "DocumentationJsFunctions" });

	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">isPort {t("Function Documentation")}</h1>
				<p>
					{t("The")} <code>isPort</code>{" "}
					{t(
						"function checks if the input value represents a valid port number. It returns",
					)}{" "}
					<code>true</code>
					{t(
						"if the value is a valid port number (within the	range 1 to 65535), and",
					)}
					<code>false</code> {t("otherwise.")}
				</p>

				<h2 className="subtitle">{t("Import")}</h2>
				<p>
					{t(
						'The function can be imported using ES6 syntax from the "multiform-validator" package:',
					)}
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`import { isPort } from 'multiform-validator';`}
				</SyntaxHighlighter>

				<p>
					{t(
						"Alternatively, you can import the function using CommonJS syntax with",
					)}{" "}
					<code>{t("require")}</code> (Node.js):
				</p>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const { isPort } = require('multiform-validator');`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Parameters")}</h2>
				<p>
					{t(
						"The function takes one parameter that can be either a string or a	number: ",
					)}
				</p>
				<ul>
					<li>
						<code>value</code> (string | number) -{" "}
						{t("The value to be checked if it represents a valid port number.")}
					</li>
				</ul>

				<h2 className="subtitle">{t("Examples")}</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`// Example 1 - Valid port numbers
const result1 = isPort('80'); // true
console.log(result1);

const result2 = isPort(443); // true
console.log(result2);

const result3 = isPort('65535'); // true
console.log(result3);

// Example 2 - Not valid port numbers
const result4 = isPort(0); // false (port number must be greater than 0)
console.log(result4);

const result5 = isPort('65536'); // false (port number must be less than or equal to 65535)
console.log(result5);

// Example 3 - Not a valid input value
const result6 = isPort('Hello'); // false (not a valid port number)
console.log(result6);`}
				</SyntaxHighlighter>

				<h2 className="subtitle">{t("Notes")}</h2>
				<p>
					{t(
						"agora esse The function first checks if the input value is either a string or a number. If the value is a string, it is converted to an integer using",
					)}{" "}
					<code>parseInt(value, 10)</code>.{" "}
					{t(
						"If the conversion is successful (resulting in a valid integer), the function checks if the integer is within the valid port range (1 to 65535). If the value is within this range and it is an integer, the function returns true, indicating that the input value represents a valid port number. Otherwise, it returns false.",
					)}
				</p>
			</div>
		</div>
	);
}
