import enJson from "@/locales/en/en.json";
import ptJson from "@/locales/pt/pt.json";

export type Langs = "en" | "pt";

interface TranslationProps {
	text: string;
	subject?: keyof typeof enJson | "";
	language?: (Langs | undefined)[];
}

interface Locale {
	[key: string]: any;
}

function translation({
	text,
	language = [],
	subject = "",
}: TranslationProps): string {
	if (language) {
		for (const lang of language) {
			if (lang?.includes("pt")) {
				return portugueseTreatment({ text, subject });
			}
			if (lang?.includes("en")) {
				return englishTreatment({ text, subject });
			}
		}
	}

	// Default to English if no matching language is found
	return englishTreatment({ text, subject });
}

export default translation;

function englishTreatment({ text, subject }: TranslationProps): string {
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

function portugueseTreatment({ text, subject }: TranslationProps): string {
	const portuguese: Locale = ptJson;

	let ptText: string | object = portuguese[text];

	if (subject && text in portuguese[subject]) {
		ptText = portuguese[subject][text];
	}

	if (typeof ptText === "object" || !ptText) {
		return text;
	}

	return ptText;
}

export function getBrowserLang(): Langs | undefined {
	if (typeof window !== "undefined") {
		return navigator.languages as unknown as Langs;
	}
	return undefined;
}
