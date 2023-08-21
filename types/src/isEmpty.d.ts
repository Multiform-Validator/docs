/**
 * @param {string} value
 * @example isEmpty(''); // true
 * @example isEmpty('   '); // true
 * @example isEmpty('Hello'); // false
 * @example isEmpty('   Hello   '); // false
 * @example isEmpty(null); // false
 * @example isEmpty(undefined); // false
 * @description Values have to be passed as a string
 * @returns {boolean} true or false
 */
declare function isEmpty(value: string): boolean;
export default isEmpty;
