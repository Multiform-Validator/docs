/**
 * @example isMD5('d41d8cd98f00b204e9800998ecf8427e'); // true
 * @example isMD5('6df23dc03f9b54cc38a0fc1483df6e21'); // true
 * @example isMD5('Hello'); // false (not a valid MD5 hash)
 * @example isMD5('123'); // false (not a valid MD5 hash)
 * @example isMD5('d41d8cd98f00b204e9800998ecf8427e123'); // false (too long)
 * @description Values have to be passed as a string
 * @returns true or false
 */
function isMD5(value: string): boolean {
	if (typeof value !== "string") {
		throw new TypeError("Input value must be a string.");
	}

	const trimmedValue: string = value.trim();
	if (trimmedValue.length !== 32) {
		return false;
	}

	const md5Regex: RegExp = /^[a-fA-F0-9]{32}$/;

	if (!md5Regex.test(trimmedValue)) {
		return false;
	}

	const allZeroRegex: RegExp = /^0{32}$/;
	if (allZeroRegex.test(trimmedValue)) {
		return false;
	}

	const weakHashes: string[] = ["d41d8cd98f00b204e9800998ecf8427e"];
	if (weakHashes.includes(trimmedValue)) {
		return false;
	}

	return true;
}

export default isMD5;
