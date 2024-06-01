/* eslint-disable no-console */
// MODE OF USE: node compareLangs.js <targetLang1> <targetLang2> <targetLang3> ...

const sourceFile = "en";

const targetFilesFromTerminal = process.argv.slice(2);

const defaultTargets = [
	"ar",
	"de",
	"es",
	"fr",
	"it",
	"ja",
	"nl",
	"pt",
	"ru",
	"tr",
	"zh-Hans",
];

const targetFiles =
	targetFilesFromTerminal.length > 0 ? targetFilesFromTerminal : defaultTargets;

const srcFile = require(`./src/locales/${sourceFile}/${sourceFile}.json`);

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

targetFiles.forEach((targetFile) => {
	let tgtFile = {};
	try {
		tgtFile = require(`./src/locales/${targetFile}/${targetFile}.json`);
	} catch {
		console.log(`"${targetFile}" lang file not found`);
	}

	const missingTranslations = findMissingTranslations(srcFile, tgtFile);

	console.log(
		missingTranslations.length
			? missingTranslations
			: ` No missing translations between "${sourceFile}" lang and "${targetFile}" lang`,
	);
});

if (targetFilesFromTerminal.length > 0) {
	console.log(
		"\n You can algo compare with the default languages: using only node compareLangs.js \n",
	);
} else {
	console.log(
		"\n You can also compare with unity languages: using node compareLangs.js <targetLang1> <targetLang2> <targetLang3> ... \n",
	);
}

// The script will output the missing translations in the console.
// If there are no missing translations, the output will be an empty array.
