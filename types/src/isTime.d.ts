/**
 * @example isTime('12:34'); // true
 * @example isTime('12:34 AM'); // true
 * @example isTime('23:59:59'); // true
 * @example isTime('12:34:56 PM'); // true
 * @example isTime('12:34:56 AM'); // true
 * @example isTime('12:34:56XM'); // false (invalid format)
 * @example isTime('25:00'); // false (invalid hour)
 * @example isTime('23:60'); // false (invalid minute)
 * @example isTime('23:59:61'); // false (invalid second)
 * @description Values have to be passed as a string in the format "hh:mm" or "hh:mm AM/PM" or "hh:mm:ss" or "hh:mm:ss AM/PM"
 */
declare function isTime(time: string): boolean;
export default isTime;
