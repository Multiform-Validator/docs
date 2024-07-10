import { NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

import { Langs } from "./types/Locales";

const languages: Langs[] = [
	"en",
	"pt",
	"ar",
	"de",
	"es",
	"fr",
	"it",
	"ja",
	"nl",
	"ru",
	"tr",
	"zh",
];

const I18nMiddleware = createI18nMiddleware({
	locales: languages,
	defaultLocale: "en",
	urlMappingStrategy: "rewriteDefault",
});

export function middleware(request: NextRequest) {
	return I18nMiddleware(request);
}

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
