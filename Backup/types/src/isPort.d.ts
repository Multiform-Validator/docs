/**
 * @example isPort('80'); // true
 * @example isPort(443); // true
 * @example isPort('65535'); // true
 * @example isPort(0); // false (port number must be greater than 0)
 * @example isPort('65536'); // false (port number must be less than or equal to 65535)
 * @example isPort('Hello'); // false (not a valid port number)
 * @description Values can be passed as a string or a number
 * @returns true or false
 */
declare function isPort(value: string | number): boolean;
export default isPort;
