"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";

import { roboto700 } from "@/fonts";
import { useScopedI18n } from "@/locales/client";
import { Locale } from "@/types/Locales";

export default function Header({ locale }: Locale) {
	const scopedT = useScopedI18n("Header");

	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const path = usePathname();

	const route = `/${locale}`;
	const homeRoute = locale === "en" ? "/" : `/${locale}`;

	const show =
		path.startsWith(`/documentation/py`) ||
		path.startsWith(`/documentation/js`) ||
		path.startsWith(`${route}/documentation/py`) ||
		path.startsWith(`${route}/documentation/js`);

	return (
		<>
			{!show && (
				<>
					<header className="flex h-32 items-center justify-around bg-header md:h-28">
						<Link href="/">
							<h1 className={`w-52 text-lg text-white ${roboto700.className}`}>
								{scopedT("header_title")}
							</h1>
						</Link>
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
										{scopedT("header_home")}
										<FaCaretDown size={12} />
									</button>
									{isSubMenuOpen && (
										<div className="absolute left-0 top-full z-10 flex w-60 flex-col gap-2 rounded border-x border-y border-black bg-dropdownMenu p-3">
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="nav-link text-blue-500"
												href={path === homeRoute ? "#" : homeRoute}
											>
												{path === homeRoute
													? scopedT("header_already_here")
													: scopedT("header_go_home")}
											</Link>
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="nav-link ml-3 text-white"
												target="_blank"
												href="https://www.buymeacoffee.com/gabriellogan"
											>
												{scopedT("header_buy_coffee")}
											</Link>
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="nav-link ml-3 text-white"
												target="_blank"
												href="https://github.com/gabriel-logan/multiform-validator#readme"
											>
												{scopedT("header_github")}
											</Link>
										</div>
									)}
								</div>
							</li>
							<li className="nav-item pl-md-0 ml-md-4 ml-0 pl-4">
								<Link
									className="nav-link text-white"
									href={`${route}/documentation`}
								>
									{scopedT("header_docs")}
								</Link>
							</li>
							<li className="nav-item pl-md-0 ml-md-4 ml-0 pl-4">
								<Link className="nav-link text-white" href={`${route}/info`}>
									{scopedT("header_info")}
								</Link>
							</li>
						</ul>
					</header>
					<div
						className={`flex justify-around bg-header md:hidden ${!isMenuOpen ? "h-0" : "h-32"} transition-all`}
					>
						<ul className={`w-44 ${!isMenuOpen ? "hidden" : "block"}`}>
							<div className="relative mb-2">
								<li
									onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
									className="ml-4 cursor-pointer list-disc text-white"
								>
									{scopedT("header_home")}
								</li>
								{isSubMenuOpen && (
									<div className="absolute left-0 top-full z-10 flex w-56 flex-col gap-2 rounded border-x border-y border-black bg-dropdownMenu p-3">
										<Link
											onClick={() => setIsSubMenuOpen(false)}
											className="text-blue-500"
											href={path === homeRoute ? "#" : homeRoute}
										>
											{path === homeRoute
												? scopedT("header_already_here")
												: scopedT("header_go_home")}
										</Link>
										<Link
											onClick={() => setIsSubMenuOpen(false)}
											className="ml-3 text-white"
											target="_blank"
											href="https://www.buymeacoffee.com/gabriellogan"
										>
											{scopedT("header_buy_coffee")}
										</Link>
										<Link
											onClick={() => setIsSubMenuOpen(false)}
											className="ml-3 text-white"
											target="_blank"
											href="https://github.com/gabriel-logan/multiform-validator#readme"
										>
											{scopedT("header_github")}
										</Link>
									</div>
								)}
							</div>
							<li className="mb-2 ml-4 cursor-pointer list-disc text-white">
								<Link
									className="nav-link text-white"
									href={`${route}/documentation`}
								>
									{scopedT("header_docs")}
								</Link>
							</li>
							<li className="mb-2 ml-4 cursor-pointer list-disc text-white">
								<Link className="nav-link text-white" href={`${route}/info`}>
									{scopedT("header_info")}
								</Link>
							</li>
						</ul>
						<div className="invisible">
							<AiOutlineClose size={24} />
						</div>
					</div>
				</>
			)}
		</>
	);
}
