import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import MainBg from "@/components/MainBg";

export default function Home() {
	return (
		<MainBg>
			<h1 className="mb-4 mt-10 text-center text-4xl font-semibold text-white">
				Welcome to the multiform-validator website
			</h1>
			<p className="text-center text-white">
				Using my library, you can convert many lines of code into very few lines
				and as a result you have a cleaner, stronger and safer code
			</p>
			<h2 className="my-6 text-center text-4xl font-semibold text-white">
				Hello (:
			</h2>
			<p className="mb-4 text-center text-white">
				by downloading my library, you will have several tools and functions
				that will do several form validations
			</p>
			<div className="mb-6 mt-3 flex justify-center gap-2">
				<Link
					href="https://badge.fury.io/js/multiform-validator.svg"
					target="_blank"
				>
					<Image
						src="https://badge.fury.io/js/multiform-validator.svg"
						alt="npm version"
						width={0}
						height={0}
						className="h-auto w-auto"
					/>
				</Link>
				<Link href="https://opensource.org/licenses/MIT" target="_blank">
					<Image
						src="https://img.shields.io/badge/License-MIT-yellow.svg"
						alt="License: MIT"
						width={0}
						height={0}
						className="h-auto w-auto"
					/>
				</Link>
				<Link
					href="https://npm-stat.com/charts.html?package=multiform-validator"
					target="_blank"
				>
					<Image
						src="https://img.shields.io/npm/dm/multiform-validator.svg"
						alt="npm downloads"
						width={0}
						height={0}
						className="h-auto w-auto"
					/>
				</Link>
			</div>

			<p className=" text-center text-white">
				follow the{" "}
				<Link className="text-blue-500" href="/documentation">
					documentation
				</Link>{" "}
				for more information
			</p>
			<div className="mt-7 flex w-40 flex-col items-center justify-center gap-6 self-center">
				<Link
					className="text-blue-500"
					href="https://github.com/gabriel-logan/multiform-validator"
					target="_blank"
					rel="noopener noreferrer"
				>
					Go to github page
				</Link>
				<Link
					className="text-blue-500"
					href="https://www.npmjs.com/package/multiform-validator"
					target="_blank"
					rel="noopener noreferrer"
				>
					Go to npm page
				</Link>
			</div>

			<div className="mx-auto my-4 w-5/6 md:w-96">
				<SyntaxHighlighter
					customStyle={{ textAlign: "center" }}
					language="bash"
					style={a11yDark}
				>
					npm install multiform-validator
				</SyntaxHighlighter>
			</div>

			<p className=" text-center text-white">or</p>

			<div className="mx-auto my-4 w-5/6 md:w-96">
				<SyntaxHighlighter
					customStyle={{ textAlign: "center" }}
					language="bash"
					style={a11yDark}
				>
					yarn add multiform-validator
				</SyntaxHighlighter>
			</div>

			<span id="temporary_span" />

			<p className=" mb-6 text-center text-white">
				You can also help the programmer by buying a coffee at the link below,
				thanks in advance (:
			</p>

			<div className="mb-10 mt-5 h-16 w-52 self-center">
				<Link href="https://www.buymeacoffee.com/gabriellogan" target="_blank">
					<Image
						src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
						alt="Buy Me A Coffee"
						width={208}
						height={64}
						className="h-auto w-auto"
					/>
				</Link>
			</div>
		</MainBg>
	);
}
