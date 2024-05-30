"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

import { getBrowserLang } from "../Internationalization";

export default function Intercepter() {
	const browserLang = getBrowserLang();
	const [lang, setLang] = useState("en");

	useEffect(() => {
		const verify =
			(browserLang &&
				(browserLang[0] === "pt" || browserLang[0] === "pt-BR")) ||
			(browserLang && (browserLang[1] === "pt" || browserLang[1] === "pt-BR"));
		if (verify) {
			setLang("pt");
			document.documentElement.lang = "pt";

			redirect("/pt");
		}
	}, []);

	return (
		<>
			{lang === "pt" && (
				<div className="min-h-screen">
					<p className="text-center text-white">
						Retornando para a página em português...
					</p>
				</div>
			)}
		</>
	);
}
