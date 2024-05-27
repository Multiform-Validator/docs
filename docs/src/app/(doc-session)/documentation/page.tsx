import Image from "next/image";
import Link from "next/link";
import { RiJavascriptFill } from "react-icons/ri";

import javaIcon from "@/assets/icons/java-icon.svg";
import pythonIcon from "@/assets/icons/python-icon.svg";
import MainBg from "@/components/MainBg";

export default function DocumentationPage() {
	const basePath = "/documentation";
	return (
		<MainBg>
			<section className="p-2">
				<h1 className="mb-4 mt-8 text-center text-2xl font-bold text-white sm:text-3xl md:text-start md:text-4xl lg:text-center">
					Documentations Page
				</h1>
				<p className="mb-8 text-center text-base text-white sm:text-lg md:text-start lg:text-center">
					Welcome to the documentation page. Here you can find all the languages
					that we support and the documentation for each one of them.
				</p>
				<h2 className="mb-12 text-center text-xl font-semibold text-white sm:text-2xl md:text-start lg:text-center">
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
