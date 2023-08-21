/**
 * @example isDate('2023-07-24'); // true
 * @example isDate('2023/07/24'); // true
 * @example isDate('24-07-2023'); // true
 * @example isDate('24/07/2023'); // true
 * @example isDate('July 24, 2023'); // true
 * @example isDate('2023-13-24'); // false (invalid month)
 * @example isDate('2023-07-40'); // false (invalid day)
 * @example isDate('2023-07'); // false (incomplete date)
 * @example isDate('Hello'); // false (not a valid date format)
 * @description Values have to be passed as a string
 */
declare function isDate(value: string): boolean;
export default isDate;
