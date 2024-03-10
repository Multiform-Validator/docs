"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function isTime(time) {
    if (typeof time !== 'string') {
        throw new TypeError('Input value must be a string.');
    }
    // Regular expression to validate time in the format "hh:mm" or "hh:mm AM/PM" or "hh:mm:ss" or "hh:mm:ss AM/PM"
    var timeRegex = /^(?:2[0-3]|1\d|0?[0-9]):[0-5]\d(?::[0-5]\d)?(?: [APap][Mm])?$/;
    return timeRegex.test(time);
}
exports.default = isTime;
