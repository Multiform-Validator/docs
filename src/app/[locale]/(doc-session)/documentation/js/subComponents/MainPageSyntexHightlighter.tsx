import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Installation() {
	return (
		<>
			<div className="">
				<SyntaxHighlighter
					customStyle={{
						textAlign: "center",
					}}
					language="bash"
					style={a11yDark}
				>
					npm install multiform-validator
				</SyntaxHighlighter>
			</div>

			<div className="">
				<SyntaxHighlighter
					customStyle={{
						textAlign: "center",
					}}
					language="bash"
					style={a11yDark}
				>
					yarn add multiform-validator
				</SyntaxHighlighter>
			</div>

			<div className="">
				<SyntaxHighlighter
					customStyle={{
						textAlign: "center",
					}}
					language="bash"
					style={a11yDark}
				>
					pnpm add multiform-validator
				</SyntaxHighlighter>
			</div>
		</>
	);
}

export function UsageExample() {
	return (
		<SyntaxHighlighter language="javascript" style={a11yDark}>
			{`const validator = require('multiform-validator');
// or
import validator from 'multiform-validator';

Attention, FUNCTION_NAME is not a valid function name!
It is just an example of how to import the functions.

const { FUNCTION_NAME } = require('multiform-validator');
// or
import { FUNCTION_NAME } from 'multiform-validator';

/**
* There are other returns in some functions, with strings etc, stay tuned
*/`}
		</SyntaxHighlighter>
	);
}

export function UsageCDNExample() {
	return (
		<SyntaxHighlighter language="html" style={a11yDark}>
			{`<script type="module">
	import { isEmail, cpfIsValid } from "https://cdn.jsdelivr.net/npm/multiform-validator@2.3.1/+esm";
	const emailResult = isEmail("123456");
	const cpfResult = cpfIsValid("123456");

	console.log(emailResult); // returns false
	console.log(cpfResult.isValid); // returns false
</script>`}
		</SyntaxHighlighter>
	);
}

export function Cdns() {
	return (
		<>
			<div className="mb-4">
				<h3 className="mb-2">jsDelivr</h3>
				<SyntaxHighlighter language="bash" style={a11yDark}>
					https://cdn.jsdelivr.net/npm/multiform-validator@2.3.1/+esm
				</SyntaxHighlighter>
				<SyntaxHighlighter language="html" style={a11yDark}>
					{`<script type="module">
	import multiformValidator from "https://cdn.jsdelivr.net/npm/multiform-validator@2.3.1/+esm"
</script>`}
				</SyntaxHighlighter>
			</div>
			<div className="mb-4">
				<h3 className="mb-2">unpkg</h3>
				<SyntaxHighlighter language="bash" style={a11yDark}>
					https://unpkg.com/multiform-validator@2.3.1/dist/cjs/index.cjs
				</SyntaxHighlighter>
				<SyntaxHighlighter language="html" style={a11yDark}>
					{`<script src="https://unpkg.com/multiform-validator@2.3.1/dist/cjs/index.cjs"></script>`}
				</SyntaxHighlighter>
			</div>
		</>
	);
}
