/**
 * @param {string} value
 * @example isMD5('d41d8cd98f00b204e9800998ecf8427e'); // true
 * @example isMD5('6df23dc03f9b54cc38a0fc1483df6e21'); // true
 * @example isMD5('Hello'); // false (not a valid MD5 hash)
 * @example isMD5('123'); // false (not a valid MD5 hash)
 * @example isMD5('d41d8cd98f00b204e9800998ecf8427e123'); // false (too long)
 * @description Values have to be passed as a string
 * @returns {boolean} true or false
 */
declare function isMD5(value: string): boolean;
export default isMD5;
