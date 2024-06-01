// locales/server.ts
import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
	en: () => import("./en/en.json"),
	pt: () => import("./pt/pt.json"),

	ar: () => import("./ar/ar.json"),
	de: () => import("./de/de.json"),
	es: () => import("./es/es.json"),
	fr: () => import("./fr/fr.json"),
	it: () => import("./it/it.json"),
	ja: () => import("./ja/ja.json"),
	nl: () => import("./nl/nl.json"),
	ru: () => import("./ru/ru.json"),
	tr: () => import("./tr/tr.json"),
	zh: () => import("./zh-Hans/zh-Hans.json"),
});
