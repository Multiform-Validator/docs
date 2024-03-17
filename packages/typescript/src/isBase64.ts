/**
 * @example isBase64('SGVsbG8gV29ybGQh'); // true
 * @example isBase64('こんにちは'); // false
 * @example isBase64('12345'); // false
 * @example isBase64(null); // false
 * @description Values have to be passed as a string
 */
function isBase64(value: string): boolean {
	if (typeof value !== 'string') {
		throw new TypeError('Input value must be a string.');
	}

	if (value.trim().length === 0) {
		throw new Error('Input value must not be an empty string.');
	}

	// Regular expression to validate Base64
	const base64Regex: RegExp = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

	return base64Regex.test(value);
}

export default isBase64;
