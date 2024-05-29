import { MetadataRoute } from "next";

import translation from "@/components/Internationalization";

export default function manifest(): MetadataRoute.Manifest {
	const t = (text: string) => translation({ text, subject: "Manifest" });

	return {
		name: t("Name"),
		short_name: t("ShortName"),
		description: t("Description"),
		start_url: "/",
		display: "standalone",
		background_color: "#121212",
		lang: "en",
		dir: "ltr",
		categories: [
			"utilities",
			"development",
			"validation",
			"form",
			"fields",
			"email",
			"telephone",
			"password",
			"cpf",
			"cnpj",
			"credit card",
			"magic numbers",
			"image",
			"mimetype",
			"validator",
			"multiform",
			"validação",
			"email-validator",
			"multiform-validator",
			"javascript",
			"npm",
			"security",
			"safe",
			"pentest",
			"security-tools",
			"Validator",
			"validate",
		],
		icons: [
			{
				src: "/favicon.ico",
				sizes: "256x256",
				type: "image/x-icon",
			},
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
			{
				src: "/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				src: "/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				src: "/mstile-150x150.png",
				sizes: "150x150",
				type: "image/png",
			},
			{
				src: "/safari-pinned-tab.svg",
				type: "image/svg+xml",
			},
			{
				src: "/opengraph-image.png",
				type: "image/png",
			},
		],
	};
}
