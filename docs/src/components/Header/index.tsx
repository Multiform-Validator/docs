"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";

export default function Header() {
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const path = usePathname();

	const show =
		path.startsWith("/documentation") || path.startsWith("/functions");

	return (
		<>
			{!show && (
				<>
					<header className="flex h-32 items-center justify-around bg-header md:h-28">
						<h1 className="w-44 text-lg font-bold text-white">
							Multiform validator
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
										Home
										<FaCaretDown size={12} />
									</button>
									{isSubMenuOpen && (
										<div className="absolute left-0 top-full z-10 flex w-52 flex-col gap-2 rounded border-x border-y border-black bg-dropdownMenu p-3">
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="nav-link text-blue-500"
												href={path === "/" ? "#" : "/"}
											>
												{path === "/" ? "You are already here (:" : "Go home"}
											</Link>
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="nav-link ml-5 text-white"
												target="_blank"
												href="https://www.buymeacoffee.com/gabriellogan"
											>
												buy me a coffee ?
											</Link>
											<Link
												onClick={() => setIsSubMenuOpen(false)}
												className="nav-link ml-5 text-white"
												target="_blank"
												href="https://github.com/gabriel-logan/multiform-validator#readme"
											>
												My github
											</Link>
										</div>
									)}
								</div>
							</li>
							<li className="nav-item pl-md-0 ml-md-4 ml-0 pl-4">
								<Link className="nav-link text-white" href="/documentation/">
									Documentation
								</Link>
							</li>
							<li className="nav-item pl-md-0 ml-md-4 ml-0 pl-4">
								<Link className="nav-link text-white" href="/info/">
									Info
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
									Home
								</li>
								{isSubMenuOpen && (
									<div className="absolute left-0 top-full z-10 flex w-52 flex-col gap-2 rounded border-x border-y border-black bg-dropdownMenu p-3">
										<Link
											onClick={() => setIsSubMenuOpen(false)}
											className="text-blue-500"
											href={path === "/" ? "#" : "/"}
										>
											{path === "/" ? "You are already here (:" : "Go home"}
										</Link>
										<Link
											onClick={() => setIsSubMenuOpen(false)}
											className="ml-5 text-white"
											target="_blank"
											href="https://www.buymeacoffee.com/gabriellogan"
										>
											buy me a coffee ?
										</Link>
										<Link
											onClick={() => setIsSubMenuOpen(false)}
											className="ml-5 text-white"
											target="_blank"
											href="https://github.com/gabriel-logan/multiform-validator#readme"
										>
											My github
										</Link>
									</div>
								)}
							</div>
							<li className="mb-2 ml-4 cursor-pointer list-disc text-white">
								<Link className="nav-link text-white" href="/documentation/">
									Documentation
								</Link>
							</li>
							<li className="mb-2 ml-4 cursor-pointer list-disc text-white">
								<Link className="nav-link text-white" href="/info/">
									Info
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
