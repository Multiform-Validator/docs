import Image from "next/image";
import Link from "next/link";

import translation from "@/components/Internationalization";
import MainBg from "@/components/MainBg";
import { merriweather, oswald, playfair, roboto100, sofiaPro } from "@/fonts";

export default function Home() {
	const t = (text: string) => translation({ text, subject: "HomePage" });

	return (
		<MainBg>
			<h1
				className={`mb-6 mt-28 p-2 text-center text-4xl font-semibold text-white ${oswald.className}`}
			>
				{t("Welcome")}
			</h1>
			<p className={`mb-4 text-center text-white ${merriweather.className}`}>
				{t("Intro")}
			</p>
			<h2
				className={`my-6 mt-14 text-center text-4xl font-semibold text-white ${playfair.className}`}
			>
				{t("Hello")} (:
			</h2>
			<p className={`text-center text-white ${sofiaPro.className}`}>
				{t("FollowThe")}{" "}
				<Link className="text-blue-500 hover:underline" href="/documentation">
					{t("Documentation").toLowerCase()}
				</Link>{" "}
				{t("ForMoreInfo").toLowerCase()}
			</p>
			<div className="my-7 flex w-52 flex-col items-center justify-center gap-6 self-center sm:w-56">
				<Link
					className="text-blue-500 hover:underline"
					href="https://github.com/gabriel-logan/multiform-validator"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("SeeTheGithubSourceCode")}
				</Link>
				<Link
					className="text-blue-500 hover:underline"
					href="https://www.npmjs.com/package/multiform-validator"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("SeeTheNpmPage")}
				</Link>
				<Link
					className="text-blue-500 hover:underline"
					href="https://pypi.org/project/multiform-validator/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("SeeThePypiPage")}
				</Link>
			</div>

			<p className={`mb-6 mt-28 text-center text-white ${roboto100.className}`}>
				{t("HelpMsg")}
			</p>

			<div className="flex justify-center">
				<iframe
					src="https://github.com/sponsors/gabriel-logan/button"
					title="Sponsor gabriel-logan"
					height="32"
					width="114"
					style={{ border: 0, borderRadius: 6 }}
				/>
			</div>

			<div className="mb-10 mt-5 h-12 w-44 self-center">
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
