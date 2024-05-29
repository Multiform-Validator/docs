// locales/server.ts
import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
	en: () => import("./en/en.json"),
	pt: () => import("./pt/pt.json"),
});
