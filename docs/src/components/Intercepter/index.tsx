"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

import { getBrowserLang } from "../Internationalization";

export default function Intercepter() {
	const browserLang = getBrowserLang();

	useEffect(() => {
		const verify =
			(browserLang &&
				(browserLang[0] === "pt" || browserLang[0] === "pt-BR")) ||
			(browserLang && (browserLang[1] === "pt" || browserLang[1] === "pt-BR"));
		if (verify) {
			document.documentElement.lang = "pt";

			redirect("/pt");
		}
	}, []);

	return null;
}
