"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example isAscii('Hello'); // true
 * @example isAscii('こんにちは'); // false
 * @example isAscii('12345'); // true
 * @example isAscii(null); // false
 * @example isAscii(undefined); // false
 * @description Values have to be passed as a string
 */
function isAscii(value) {
    if (typeof value !== 'string') {
        throw new TypeError('Input value must be a string.');
    }
    if (value.trim().length === 0) {
        throw new Error('Input value must not be an empty string.');
    }
    for (var i = 0; i < value.length; i += 1) {
        var charCode = value.charCodeAt(i);
        if (Number.isNaN(charCode) || charCode > 127) {
            return false;
        }
    }
    return true;
}
exports.default = isAscii;
