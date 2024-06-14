/**
 * Validates if the given string is a valid email address.
 *
 * @example isEmail('foo@bar.com') // returns true;
 * @example isEmail('foo@bar') // returns false;
 * @example isEmail('1foo@bar.com') // returns false, starts with a number.
 * @example isEmail('foo@1bar.com') // returns false, domain starts with a number.
 * @example isEmail('foo@bar.1com') // returns false, TLD starts with a number.
 * @example isEmail('..foo@bar.com') // returns false, starts with consecutive dots.
 * @example isEmail('foo..bar@baz.com') // returns false, local part contains consecutive dots.
 * @example isEmail('foo@..bar.com') // returns false, domain contains consecutive dots.
 * @example isEmail('foo@bar..com') // returns false, domain contains consecutive dots before TLD.
 * @example isEmail('foo@bar.com..') // returns false, ends with consecutive dots.
 * @example isEmail('foo@@bar.com') // returns false, contains multiple @ symbols.
 * @example isEmail('foo@bar.com.br') // returns true, valid country code TLD.
 * @example isEmail('foo@bar.com.com') // returns false, domain repetition.
 * @example isEmail('foo@bar.c') // returns false, TLD too short.
 * @example isEmail('!foo@bar.com') // returns false, starts with a special character.
 * @example isEmail('foo bar@baz.com') // returns false, contains spaces.
 * @example isEmail('foo@bar!com') // returns false, domain contains special characters.
 * @example isEmail('foo!@bar.com') // returns false, local part contains special characters.
 * @example isEmail('foo@bar.c') // returns false, invalid TLD.
 * @description This function checks if the provided string is a valid email address according to the standard email formatting rules. It checks for the presence of an @ symbol, valid characters in the local part and domain, the absence of forbidden characters and patterns, and a valid top-level domain.
 * @param email The email address to validate.
 * @returns {boolean} True if the email address is valid, false otherwise.
 */
function isEmail(email: string): boolean {
	if (typeof email !== "string") {
		throw new TypeError("Invalid input, must be a string");
	}

	if (!email) {
		throw new Error("Value cannot be null or empty");
	}

	// Check if email starts with a special character
	const startsWithSpecialChar: RegExp = /^[^a-zA-Z0-9]/;
	if (startsWithSpecialChar.test(email)) return false;

	const regex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (Number(email[0])) return false;

	if (!regex.test(email)) return false;

	const antesDoArroba: number = email.indexOf("@");

	const depoisDoArroba: number = email.indexOf("@") + 1;

	const depoisDoUltimoPonto: number = email.lastIndexOf(".");

	if (Number(email[depoisDoArroba])) return false;

	if (Number(email[depoisDoUltimoPonto])) return false;

	if (email.substring(0, antesDoArroba).includes("..")) return false;

	if (email.substring(0, antesDoArroba).endsWith(".")) return false;

	const parts: string[] = email.split(".");
	if (parts.length > 2 && parts[parts.length - 2] === parts[parts.length - 3]) {
		return false;
	}

	// Check if there is more than one @
	if (email.split("@").length - 1 > 1) {
		return false;
	}

	// Check if there is more than one consecutive dot after @
	if (email.substring(depoisDoArroba).includes("..")) {
		return false;
	}

	// Check if the domain is repeating
	const domainParts: string[] = email.split("@")[1].split(".");
	const uniqueDomainParts: string[] = Array.from(new Set(domainParts));
	if (domainParts.length !== uniqueDomainParts.length) {
		return false;
	}

	return true;
}
export default isEmail;
