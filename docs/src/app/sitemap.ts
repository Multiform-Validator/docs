import { MetadataRoute } from "next";

import { JsFuncTypes } from "@/types/Functions/Javascript";
import { Langs } from "@/types/Locales";

const hostUrl: string =
	process.env.NEXT_PUBLIC_WEBSITE_URL ??
	"https://multiformvalidator.vercel.app";

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

const ChangeFrequency = {
	ALWAYS: "always",
	HOURLY: "hourly",
	DAILY: "daily",
	WEEKLY: "weekly",
	MONTHLY: "monthly",
	YEARLY: "yearly",
	NEVER: "never",
} as const;

function generateJsMaps(): MetadataRoute.Sitemap {
	const prefix: string = "documentation/js/functions";

	const functions: JsFuncTypes[] = [
		"cnpjIsValid",
		"cpfIsValid",
		"getOnlyEmail",
		"identifyFlagCard",
		"isAscii",
		"isBase64",
		"isCEP",
		"isCreditCardValid",
		"isDate",
		"isDecimal",
		"isEmail",
		"isEmpty",
		"isMACAddress",
		"isMD5",
		"isNumber",
		"isPort",
		"isPostalCode",
		"isTime",
		"isValidAudio",
		"isValidImage",
		"isValidPdf",
		"isValidTxt",
		"isValidVideo",
		"passwordStrengthTester",
		"validateBRPhoneNumber",
		"validateEmail",
		"validateName",
		"validatePassportNumber",
		"validatePassword",
		"validatePhoneNumber",
		"validateSurname",
		"validateTextarea",
		"validateUsername",
		"validateUSPhoneNumber",
	];

	const homeMetadata = functions.map((func) => ({
		url: `${hostUrl}/${prefix}/${func}`,
		lastModified: new Date(),
		changeFrequency: ChangeFrequency.MONTHLY,
		priority: 0.9,
	}));

	const alternatesMetadata = functions.flatMap((func) =>
		languages.map((lang) => ({
			url: `${hostUrl}/${lang}/${prefix}/${func}`,
			lastModified: new Date(),
			changeFrequency: ChangeFrequency.MONTHLY,
			priority: 0.9,
		})),
	);

	const metadata = [...homeMetadata, ...alternatesMetadata];

	return metadata;
}

function generateBasicMetadata(): MetadataRoute.Sitemap {
	const homeMetadata: MetadataRoute.Sitemap = [
		{
			url: hostUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${hostUrl}/documentation`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${hostUrl}/documentation/py`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${hostUrl}/documentation/js`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${hostUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${hostUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
		},
		{
			url: `${hostUrl}/privacity-polices`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
		},
		{
			url: `${hostUrl}/info`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${hostUrl}/news`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.2,
		},
	];

	const alternatesMetadata: MetadataRoute.Sitemap = languages.flatMap(
		(lang) => [
			{
				url: `${hostUrl}/${lang}`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.5,
			},
			{
				url: `${hostUrl}/${lang}/documentation`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.6,
			},
			{
				url: `${hostUrl}/${lang}/documentation/py`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.8,
			},
			{
				url: `${hostUrl}/${lang}/documentation/js`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 1,
			},
			{
				url: `${hostUrl}/${lang}/about`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.6,
			},
			{
				url: `${hostUrl}/${lang}/terms`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.3,
			},
			{
				url: `${hostUrl}/${lang}/privacity-polices`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.3,
			},
			{
				url: `${hostUrl}/${lang}/info`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.5,
			},
			{
				url: `${hostUrl}/${lang}/news`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.2,
			},
		],
	);

	return [...homeMetadata, ...alternatesMetadata];
}

export default function sitemap(): MetadataRoute.Sitemap {
	return [...generateBasicMetadata(), ...generateJsMaps()];
}
