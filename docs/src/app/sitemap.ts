import { MetadataRoute } from "next";

const hostUrl: string =
	process.env.WEBSITE_URL ??
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
	}));
}

export default function sitemap(): MetadataRoute.Sitemap {
	return [
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
