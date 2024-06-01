"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaYoutube, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import { playfair, sofiaPro } from "@/fonts";
import { useScopedI18n } from "@/locales/client";
import { Locale } from "@/types/Locales";

export default function Footer({ locale }: Locale) {
	const scopedT = useScopedI18n("Footer");

	const route = `/${locale}`;

	const path = usePathname();

	const show =
		path.startsWith(`${route}/documentation/py`) ||
		path.startsWith(`${route}/documentation/js`);

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
								href="/"
								className={`text-inherit text-white opacity-80 hover:underline hover:opacity-100 ${playfair.className}`}
							>
								{scopedT("Home")}
							</Link>
						</li>
						<li className="mx-2 inline-block px-2">
							<Link
								href="/documentation/"
								className={`text-inherit text-white opacity-80 hover:underline hover:opacity-100 ${playfair.className}`}
							>
								{scopedT("Services")}
							</Link>
						</li>
						<li className="mx-2 inline-block px-2">
							<Link
								href="/about/"
								className={`text-inherit text-white opacity-80 hover:underline hover:opacity-100 ${playfair.className}`}
							>
								{scopedT("About")}
							</Link>
						</li>
						<li className="mx-2 inline-block px-2">
							<Link
								href="/terms/"
								className={`text-inherit text-white opacity-80 hover:underline hover:opacity-100 ${playfair.className}`}
							>
								{scopedT("Terms")}
							</Link>
						</li>
						<li className="mx-2 inline-block px-2">
							<Link
								href="/privacity-polices/"
								className={`text-inherit text-white opacity-80 hover:underline hover:opacity-100 ${playfair.className}`}
							>
								{scopedT("Privacy Policy")}
							</Link>
						</li>
					</ul>
					<p
						className={`mb-0 mt-8 text-center text-sm text-gray-400 ${sofiaPro.className}`}
					>
						{scopedT("CopyRightMsg")}
					</p>
				</footer>
			)}
		</>
	);
}
