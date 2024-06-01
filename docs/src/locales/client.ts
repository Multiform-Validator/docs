// locales/client.ts
"use client";
import { createI18nClient } from "next-international/client";

export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
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
	"zh-Hans": () => import("./zh-Hans/zh-Hans.json"),
});
