import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function ValidatePassportNumber() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">
					Passport Number Validation Function Documentation
				</h1>
				<p>
					The <code>validatePassportNumber</code> function is used to validate
					passport numbers. It returns an object with two properties:
					&apos;isValid&apos; (boolean) and &apos;country&apos; (string). The
					&apos;isValid&apos; property will be true if the passport number
					matches the supported formats, and &apos;country&apos; property will
					indicate the country associated with the passport number. If the
					passport number does not match any supported format,
					&apos;isValid&apos; will be false, and &apos;country&apos; will be
					null.
				</p>

				<h2 className="subtitle">Function Signature</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`function validatePassportNumber(
		passportNumber: string
): { isValid: boolean, country: string | null };`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<ul>
					<li>
						<code>passportNumber</code> (string) - The passport number to be
						validated.
					</li>
				</ul>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const result1 = validatePassportNumber('A1234567');
console.log(result1);
// Output: { isValid: true, country: 'United States' }

const result2 = validatePassportNumber('123456789');
console.log(result2);
// Output: { isValid: false, country: null }`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Supported Passport Formats</h2>
				<ul>
					<li>United States: 9 digits (e.g., &apos;123456789&apos;)</li>
					<li>
						United Kingdom: 2 uppercase letters followed by 6 digits (e.g.,
						&apos;AB123456&apos;)
					</li>
					<li>
						Germany: 2 uppercase letters followed by 8 digits (e.g.,
						&apos;AB12345678&apos;)
					</li>
					<li>
						Canada: 1 uppercase letter followed by 7 digits (e.g.,
						&apos;A1234567&apos;)
					</li>
					<li>
						Australia: 1 uppercase letter followed by 7 digits (e.g.,
						&apos;A1234567&apos;)
					</li>
					<li>Brazil: 9 digits (e.g., &apos;123456789&apos;)</li>
					<li>
						France: 2 uppercase letters followed by 7 digits (e.g.,
						&apos;AB1234567&apos;)
					</li>
					<li>
						Italy: 1 uppercase letter followed by 7 digits (e.g.,
						&apos;A1234567&apos;)
					</li>
					<li>
						India: 1 uppercase letter followed by 7 digits (e.g.,
						&apos;A1234567&apos;)
					</li>
					<li>
						China: 1 uppercase letter followed by 8 digits (e.g.,
						&apos;A12345678&apos;)
					</li>
				</ul>
			</div>
		</div>
	);
}
