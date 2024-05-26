import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Multiform Validator - Your Multilingual Validation Library",
		short_name: "Multiform Validator",
		description:
			"Multilingual library made for validation, various form fields, such as: email, telephone, password, cpf, cnpj, credit card, magic numbers for image mimetype validation and much more.",
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
		],
	};
}
