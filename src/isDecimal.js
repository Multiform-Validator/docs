"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example isDecimal('123.45'); // true
 * @example isDecimal('-123.45'); // true
 * @example isDecimal('0.123'); // true
 * @example isDecimal('1,234.56'); // true
 * @example isDecimal('1.234,56'); // false (invalid format)
 * @example isDecimal('abc'); // false (not a valid number)
 * @example isDecimal('12a.34'); // false (not a valid number)
 * @example isDecimal('12.34.56'); // false (not a valid number)
 * @description Values have to be passed as a string
 * @returns true or false
 */
function isDecimal(value) {
    var getValued = value;
    if (typeof getValued !== 'string') {
        if (typeof getValued === 'number') {
            getValued = getValued.toString();
        }
        else {
            throw new TypeError('Input value must be a string or a number.');
        }
    }
    if (getValued.trim().length === 0) {
        throw new Error('Input value must not be an empty string.');
    }
    // Regular expression to validate decimal numbers
    var decimalRegex = /^[-+]?(?:\d+(?:[,.]\d*)?|\d*[,.]\d+)$/;
    if (!decimalRegex.test(getValued)) {
        return false;
    }
    // Check for multiple decimal separators
    var decimalSeparator = getValued.includes('.') ? '.' : ',';
    var otherSeparator = decimalSeparator === '.' ? ',' : '.';
    if (getValued.includes(decimalSeparator) && getValued.includes(otherSeparator)) {
        return false;
    }
    // Additional checks for negative sign
    if (getValued.startsWith('-')) {
        // Ensure the negative sign is only at the beginning and not elsewhere
        if (getValued.lastIndexOf('-') > 0) {
            return false;
        }
    }
    return true;
}
exports.default = isDecimal;
