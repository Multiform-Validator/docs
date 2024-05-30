"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaYoutube, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import { playfair, sofiaPro } from "@/fonts";

import translation, { Langs, getBrowserLang } from "../Internationalization";

export default function Footer() {
	const [isClient, setIsClient] = useState(false);

	const browserLang = getBrowserLang() as unknown as (Langs | undefined)[];

	const t = (text: string) =>
		translation({ text, subject: "Footer", language: browserLang });

	const path = usePathname();

	const route = path.startsWith("/pt") ? "/pt/" : "/";

	const show =
		path.startsWith("/documentation/js") ||
		path.startsWith("/documentation/py") ||
		path.startsWith("/pt/documentation/py") ||
		path.startsWith("/pt/documentation/js") ||
		path.startsWith("/en/documentation/js") ||
		path.startsWith("/en/documentation/py");

	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		<>
			{!show && (
				<footer className="flex h-56 flex-col items-center justify-center border-t-4 border-black bg-bg1-dark px-0 py-10">
					<div className="flex items-center justify-center gap-3 pb-6 text-center">
						<Link href="#" target="_blank" className="mx-2 text-white">
							<FaInstagram size={30} />
						</Link>
						<Link href="#" target="_blank" className="mx-2 text-white">
							<FaYoutube size={30} />
						</Link>
						<Link
							href="https://github.com/gabriel-logan/"
							target="_blank"
							className="mx-2 text-white"
						>
							<FaGithub size={30} />
						</Link>
						<Link href="#" target="_blank" className="mx-2 text-white">
							<FaLinkedin size={30} />
						</Link>
					</div>
					<ul className="mb-0 list-none p-0 text-center text-lg leading-6">
						<li className="mx-2 inline-block px-2">
							<Link
								href={route}
								className={`text-inherit text-white opacity-80 hover:underline hover:opacity-100 ${playfair.className}`}
							>
								{isClient ? t("Home") : "Home"}
							</Link>
						</li>
						<li className="mx-2 inline-block px-2">
							<Link
								href={`${route}documentation/`}
								className={`text-inherit text-white opacity-80 hover:underline hover:opacity-100 ${playfair.className}`}
							>
								{isClient ? t("Services") : "Services"}
							</Link>
						</li>
						<li className="mx-2 inline-block px-2">
							<Link
								href={`${route}about/`}
								className={`text-inherit text-white opacity-80 hover:underline hover:opacity-100 ${playfair.className}`}
							>
								{isClient ? t("About") : "About"}
							</Link>
						</li>
						<li className="mx-2 inline-block px-2">
							<Link
								href={`${route}terms/`}
								className={`text-inherit text-white opacity-80 hover:underline hover:opacity-100 ${playfair.className}`}
							>
								{isClient ? t("Terms") : "Terms"}
							</Link>
						</li>
						<li className="mx-2 inline-block px-2">
							<Link
								href={`${route}privacity-polices/`}
								className={`text-inherit text-white opacity-80 hover:underline hover:opacity-100 ${playfair.className}`}
							>
								{isClient ? t("Privacy Policy") : "Privacy Policy"}
							</Link>
						</li>
					</ul>
					<p
						className={`mb-0 mt-8 text-center text-sm text-gray-400 ${sofiaPro.className}`}
					>
						{isClient
							? t("CopyRightMsg")
							: "Multiform Validator © 2023 - Gabriel Logan"}
					</p>
				</footer>
			)}
		</>
	);
}
