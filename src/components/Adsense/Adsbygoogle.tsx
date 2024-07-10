"use client";

import { useEffect } from "react";

declare global {
	interface Window {
		adsbygoogle: any;
	}
}

interface AdsbygoogleProps {
	NODE_ENV: string | undefined;
}

export default function Adsbygoogle({ NODE_ENV }: AdsbygoogleProps) {
	useEffect(() => {
		NODE_ENV === "production" &&
			(window.adsbygoogle = window.adsbygoogle || []).push({});
	}, [NODE_ENV]);

	return <></>;
}
