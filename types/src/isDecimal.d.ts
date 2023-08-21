/**
 * @param {string|number} value
 * @example isDecimal('123.45'); // true
 * @example isDecimal('-123.45'); // true
 * @example isDecimal('0.123'); // true
 * @example isDecimal('1,234.56'); // true
 * @example isDecimal('1.234,56'); // false (invalid format)
 * @example isDecimal('abc'); // false (not a valid number)
 * @example isDecimal('12a.34'); // false (not a valid number)
 * @example isDecimal('12.34.56'); // false (not a valid number)
 * @description Values have to be passed as a string
 * @returns {boolean} true or false
 */
declare function isDecimal(value: string | number): boolean;
export default isDecimal;
