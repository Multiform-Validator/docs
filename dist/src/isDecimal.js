"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    var decimalRegex = /^[-+]?(?:\d+(?:[,.]\d*)?|\d*[,.]\d+)$/;
    if (!decimalRegex.test(getValued)) {
        return false;
    }
    var decimalSeparator = getValued.includes('.') ? '.' : ',';
    var otherSeparator = decimalSeparator === '.' ? ',' : '.';
    if (getValued.includes(decimalSeparator) && getValued.includes(otherSeparator)) {
        return false;
    }
    if (getValued.startsWith('-')) {
        if (getValued.lastIndexOf('-') > 0) {
            return false;
        }
    }
    return true;
}
exports.default = isDecimal;
