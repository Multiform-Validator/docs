/* eslint-env node */
module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/strict-type-checked",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	plugins: ["@typescript-eslint"],
	root: true,
	rules: {
		"no-else-return": ["error", { allowElseIf: false }],
		"consistent-return": "error",
		"no-console": ["warn", { allow: ["warn", "error"] }], // Here you are allowing console.warn and console.error
		"@typescript-eslint/typedef": [
			"error",
			{
				variableDeclaration: true,
				memberVariableDeclaration: true,
			},
		],
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "class",
				format: ["PascalCase"],
			},
		],
		"@typescript-eslint/prefer-readonly": "error",
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				accessibility: "explicit",
				overrides: {
					accessors: "explicit",
					constructors: "no-public",
					methods: "explicit",
					properties: "explicit",
					parameterProperties: "explicit",
				},
			},
		],
	},
};
