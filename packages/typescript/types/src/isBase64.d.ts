/**
 * @example isBase64('SGVsbG8gV29ybGQh'); // true
 * @example isBase64('こんにちは'); // false
 * @example isBase64('12345'); // false
 * @example isBase64(null); // false
 * @description Values have to be passed as a string
 */
declare function isBase64(value: string): boolean;
export default isBase64;
