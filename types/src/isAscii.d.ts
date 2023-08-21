/**
 * @example isAscii('Hello'); // true
 * @example isAscii('こんにちは'); // false
 * @example isAscii('12345'); // true
 * @example isAscii(null); // false
 * @example isAscii(undefined); // false
 * @description Values have to be passed as a string
 */
declare function isAscii(value: string): boolean;
export default isAscii;
