"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getBrowserLang } from "../Internationalization";
import MainBg from "../MainBg";

export default function Intercepter() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const browserLang = getBrowserLang();

		const verify = (browserLang &&
			(browserLang[0] === "pt" || browserLang[0] === "pt-BR")) as boolean;

		if (verify) {
			document.documentElement.lang = "pt";
			setIsLoading(true);
			router.push("/pt");
			setIsLoading(false);
		}
	}, []);

	if (isLoading) {
		return (
			<MainBg>
				<></>
			</MainBg>
		);
	}

	return null;
}
