/* eslint-disable no-console */
const sourceFile = "en";
const targetFile = "pt";

const srcFile = require(`./src/locales/${sourceFile}/${sourceFile}.json`);
const tgtFile = require(`./src/locales/${targetFile}/${targetFile}.json`);

// rest of the code...

function findMissingTranslations(sourceMap, targetMap, prefix = "") {
	let missingKeys = [];

	Object.keys(sourceMap).forEach((key) => {
		if (typeof sourceMap[key] === "object") {
			missingKeys = [
				...missingKeys,
				...findMissingTranslations(
					sourceMap[key],
					targetMap[key] || {},
					`${prefix}${key}.`,
				),
			];
		} else if (!(key in (targetMap || {}))) {
			missingKeys.push(`${prefix}${key}`);
		}
	});

	return missingKeys;
}

const missingTranslations = findMissingTranslations(srcFile, tgtFile);

console.log(
	missingTranslations.length
		? missingTranslations
		: ` No missing translations between "${sourceFile}" lang and "${targetFile}" lang`,
);

// The script will output the missing translations in the console.
// If there are no missing translations, the output will be an empty array.

/**
 * [
  'HomeLayout.Opengraph title',
  'HomeLayout.Opengraph description',
  'About.About_Page',
  'About.About_Page_Description',
  'Info.Info_Page',
  'PrivacyPolices.Privacy Policy',
  'Terms.Terms and Conditions of Multiform Validator library',
  'DocumentationJsFunctions.Import',
  'DocumentationJsFunctions.require',
  'DocumentationJsFunctions.(optional boolean) - If set to',
  'DocumentationJsFunctions.trim()'
]
 */