"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";

import { roboto700 } from "@/fonts";

import translation, { getBrowserLang } from "../Internationalization";

export default function Header() {
	const [isClient, setIsClient] = useState(false);

	const browserLang = getBrowserLang();

	const t = (text: string) =>
		translation({ text, subject: "Header", language: browserLang });

	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
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
				<>
					<header className="flex h-32 items-center justify-around bg-header md:h-28">
						<h1 className={`w-44 text-lg text-white ${roboto700.className}`}>
							{isClient ? t("header_title") : "Multiform Validator"}
						</h1>
						<div className="flex md:hidden">
							<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
								{isMenuOpen ? (
									<AiOutlineClose size={24} color="white" />
								) : (
									<AiOutlineMenu size={24} color="white" />
								)}
							</button>
						</div>
						<ul className="hidden gap-2 md:flex">
							<li>
								<div className="relative">
									<button
										onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
										className="flex items-center gap-1 text-white"
									>
										{isClient ? t("header_home") : "Home"}
										<FaCaretDown size={12} />
									</button>
									{isSubMenuOpen && isClient && (
										<div className="absolute left-0 top-full z-10 flex w-52 flex-col gap-2 rounded border-x border-y border-black bg-dropdownMenu p-3">
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="nav-link text-blue-500"
												href={path === `${route}` ? "#" : `${route}`}
											>
												{path === `${route}`
													? t("header_already_here")
													: t("header_go_home")}
											</Link>
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="nav-link ml-5 text-white"
												target="_blank"
												href="https://www.buymeacoffee.com/gabriellogan"
											>
												{t("header_buy_coffee")}
											</Link>
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="nav-link ml-5 text-white"
												target="_blank"
												href="https://github.com/gabriel-logan/multiform-validator#readme"
											>
												{t("header_github")}
											</Link>
										</div>
									)}
								</div>
							</li>
							<li className="nav-item pl-md-0 ml-md-4 ml-0 pl-4">
								<Link
									className="nav-link text-white"
									href={`${route}documentation`}
								>
									{isClient ? t("header_docs") : "Docs"}
								</Link>
							</li>
							<li className="nav-item pl-md-0 ml-md-4 ml-0 pl-4">
								<Link className="nav-link text-white" href={`${route}info`}>
									{isClient ? t("header_info") : "Info"}
								</Link>
							</li>
						</ul>
					</header>
					<div
						className={`flex justify-around bg-header md:hidden ${!isMenuOpen ? "h-0" : "h-32"} transition-all`}
					>
						{isClient && (
							<ul className={`w-44 ${!isMenuOpen ? "hidden" : "block"}`}>
								<div className="relative mb-2">
									<li
										onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
										className="ml-4 cursor-pointer list-disc text-white"
									>
										{t("header_home")}
									</li>
									{isSubMenuOpen && (
										<div className="absolute left-0 top-full z-10 flex w-52 flex-col gap-2 rounded border-x border-y border-black bg-dropdownMenu p-3">
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="text-blue-500"
												href={path === `${route}` ? "#" : `${route}`}
											>
												{path === `${route}`
													? t("header_already_here")
													: t("header_go_home")}
											</Link>
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="ml-5 text-white"
												target="_blank"
												href="https://www.buymeacoffee.com/gabriellogan"
											>
												{t("header_buy_coffee")}
											</Link>
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="ml-5 text-white"
												target="_blank"
												href="https://github.com/gabriel-logan/multiform-validator#readme"
											>
												{t("header_github")}
											</Link>
										</div>
									)}
								</div>
								<li className="mb-2 ml-4 cursor-pointer list-disc text-white">
									<Link
										className="nav-link text-white"
										href={`${route}documentation`}
									>
										{t("header_docs")}
									</Link>
								</li>
								<li className="mb-2 ml-4 cursor-pointer list-disc text-white">
									<Link className="nav-link text-white" href={`${route}info`}>
										{t("header_info")}
									</Link>
								</li>
							</ul>
						)}
						<div className="invisible">
							<AiOutlineClose size={24} />
						</div>
					</div>
				</>
			)}
		</>
	);
}
