import Image from "next/image";
import Link from "next/link";
import { RiJavascriptFill } from "react-icons/ri";

import MainBg from "@/components/MainBg";

import javaIcon from "./java-icon.svg";
import pythonIcon from "./python-icon.svg";

export default function DocumentationPage() {
	const basePath = "/documentation";
	return (
		<MainBg>
			<section className="p-2">
				<h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
					Documentations Page
				</h1>
				<p className="mb-8 text-lg text-white">
					Welcome to the documentation page. Here you can find all the languages
					that we support and the documentation for each one of them.
				</p>
				<h2 className="mb-8 text-2xl font-semibold text-white">
					Here&apos;s all the languages that we support
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Link
						href={`${basePath}/js`}
						className="mx-auto max-w-96 cursor-pointer rounded border-black bg-white p-4 shadow hover:scale-105 active:scale-100"
					>
						<RiJavascriptFill size={64} color="gold" />
						<h3 className="mb-2 mt-1 text-xl font-semibold text-black">
							JavaScript
						</h3>
						<p className="text-black">
							Here you can find the documentation for the JavaScript language.
						</p>
					</Link>
					<Link
						href={`${basePath}/py`}
						className="mx-auto max-w-96 cursor-pointer rounded border-black bg-white p-4 shadow hover:scale-105 active:scale-100"
					>
						<Image src={pythonIcon} alt="python-icon" />
						<h3 className="mb-2 mt-1 text-xl font-semibold text-black">
							Python
						</h3>
						<p className="text-black">
							Here you can find the documentation for the Python language.
						</p>
					</Link>
					<Link
						href={`${basePath}`}
						className="mx-auto max-w-96 cursor-pointer rounded border-black bg-white p-4 shadow hover:scale-105 active:scale-100"
					>
						<Image src={javaIcon} alt="java-icon" />
						<h3 className="mb-2 mt-1 text-xl font-semibold text-black">Java</h3>
						<p className="text-black">
							Here you can find the documentation for the Java language.
						</p>
						<p className="mt-2 text-center text-black">In coming ...</p>
					</Link>
				</div>
			</section>
		</MainBg>
	);
}
