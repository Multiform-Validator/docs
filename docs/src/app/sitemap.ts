import { MetadataRoute } from "next";

const hostUrl: string =
	process.env.NEXT_PUBLIC_WEBSITE_URL ??
	"https://gabriel-logan.github.io/multiform-validator";

function generateJsMaps(): MetadataRoute.Sitemap {
	const prefix: string = "documentation/js/functions";

	const functions: string[] = [
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

	return functions.map((func) => ({
		url: `${hostUrl}/${prefix}/${func}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 0.9,
		alternates: {
			languages: {
				en: `${hostUrl}/en/${prefix}/${func}`,
				pt: `${hostUrl}/pt/${prefix}/${func}`,
			},
		},
	}));
}

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: hostUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
			alternates: {
				languages: {
					en: `${hostUrl}/en`,
					pt: `${hostUrl}/pt`,
				},
			},
		},
		{
			url: `${hostUrl}/documentation`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
			alternates: {
				languages: {
					en: `${hostUrl}/en/documentation`,
					pt: `${hostUrl}/pt/documentation`,
				},
			},
		},
		{
			url: `${hostUrl}/documentation/py`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
			alternates: {
				languages: {
					en: `${hostUrl}/en/documentation/py`,
					pt: `${hostUrl}/pt/documentation/py`,
				},
			},
		},
		{
			url: `${hostUrl}/documentation/js`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			alternates: {
				languages: {
					en: `${hostUrl}/en/documentation/js`,
					pt: `${hostUrl}/pt/documentation/js`,
				},
			},
		},
		{
			url: `${hostUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
			alternates: {
				languages: {
					en: `${hostUrl}/en/about`,
					pt: `${hostUrl}/pt/about`,
				},
			},
		},
		{
			url: `${hostUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
			alternates: {
				languages: {
					en: `${hostUrl}/en/terms`,
					pt: `${hostUrl}/pt/terms`,
				},
			},
		},
		{
			url: `${hostUrl}/privacity-polices`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
			alternates: {
				languages: {
					en: `${hostUrl}/en/privacity-polices`,
					pt: `${hostUrl}/pt/privacity-polices`,
				},
			},
		},
		{
			url: `${hostUrl}/info`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
			alternates: {
				languages: {
					en: `${hostUrl}/en/info`,
					pt: `${hostUrl}/pt/info`,
				},
			},
		},
		{
			url: `${hostUrl}/news`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.2,
		},
		...generateJsMaps(),
	];
}

/**
 * example:
 * 		{
			url: hostUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			alternates: {
				languages: {
					pt: `${hostUrl}/pt`,
				},
			},
		},
 */

/**
info
documentation
about
terms
privacity-polices
documentation/py
documentation/js
*/
