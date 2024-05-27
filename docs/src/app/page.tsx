import Image from "next/image";
import Link from "next/link";

import MainBg from "@/components/MainBg";
import { merriweather, oswald, playfair, roboto100, sofiaPro } from "@/fonts";

export default function Home() {
	return (
		<MainBg>
			<h1
				className={`mb-6 mt-28 p-2 text-center text-4xl font-semibold text-white ${oswald.className}`}
			>
				Welcome to the multiform-validator website
			</h1>
			<p className={`mb-4 text-center text-white ${merriweather.className}`}>
				Using my library, you can convert many lines of code into very few lines
				and as a result you have a cleaner, stronger and safer code, you will
				have several tools and functions that will do several form validations
			</p>
			<h2
				className={`my-6 mt-14 text-center text-4xl font-semibold text-white ${playfair.className}`}
			>
				Hello (:
			</h2>
			<p className={`text-center text-white ${sofiaPro.className}`}>
				follow the{" "}
				<Link className="text-blue-500 hover:underline" href="/documentation">
					documentation
				</Link>{" "}
				for more information
			</p>
			<div className="my-7 flex w-48 flex-col items-center justify-center gap-6 self-center">
				<Link
					className="text-blue-500 hover:underline"
					href="https://github.com/gabriel-logan/multiform-validator"
					target="_blank"
					rel="noopener noreferrer"
				>
					See the github source
				</Link>
				<Link
					className="text-blue-500 hover:underline"
					href="https://www.npmjs.com/package/multiform-validator"
					target="_blank"
					rel="noopener noreferrer"
				>
					See the npm page
				</Link>
				<Link
					className="text-blue-500 hover:underline"
					href="https://pypi.org/project/multiform-validator/"
					target="_blank"
					rel="noopener noreferrer"
				>
					See the pypi page
				</Link>
			</div>

			<p className={`mb-6 mt-28 text-center text-white ${roboto100.className}`}>
				You can also help the programmer by buying a coffee at the link below,
				thanks in advance (:
			</p>

			<div className="mb-10 mt-5 h-16 w-52 self-center">
				<Link href="https://www.buymeacoffee.com/gabriellogan" target="_blank">
					<Image
						src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
						alt="Buy Me A Coffee"
						width={0}
						height={0}
						className="h-auto w-auto"
					/>
				</Link>
			</div>
		</MainBg>
	);
}
