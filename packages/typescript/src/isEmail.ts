/**
 * @example isEmail('foor@bar.com') true;
 * @example isEmail('foor@bar') false;
 */
function isEmail(email: string): boolean {
	if (typeof email !== "string") {
		throw new TypeError("Invalid input, must be a string");
	}

	if (!email) {
		throw new Error("Value cannot be null or empty");
	}

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
