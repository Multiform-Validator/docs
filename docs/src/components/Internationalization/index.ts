import enJson from "@/locales/en/en.json";

type Langs = "en" | "pt";

interface TranslationProps {
	text: string;
	subject?: keyof typeof enJson | "";
	language?: Langs;
}

interface Locale {
	[key: string]: any;
}

function translation({
	text,
	language = "en",
	subject = "",
}: TranslationProps): string {
	const english: Locale = enJson;

	let enText: string | object = english[text];

	if (subject && text in english[subject]) {
		enText = english[subject][text];
	}

	if (typeof enText === "object" || !enText) {
		return text;
	}

	return enText;
}

export default translation;
