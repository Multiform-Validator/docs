"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDate(value) {
    if (typeof value !== 'string') {
        throw new TypeError('Input value must be a string.');
    }
    if (value.trim().length === 0) {
        throw new Error('Input value must not be an empty string.');
    }
    var dateObject = new Date(value);
    if (Number.isNaN(dateObject) || !(dateObject instanceof Date)) {
        return false;
    }
    var dateStringRegex = /^(?:\d{4}[-/]\d{2}[-/]\d{2}|\d{2}[-/]\d{2}[-/]\d{4}|[A-Za-z]+\s\d{1,2}, \d{4})$/;
    if (!dateStringRegex.test(value)) {
        return false;
    }
    var year = dateObject.getFullYear();
    var month = dateObject.getMonth() + 1;
    var day = dateObject.getDate();
    if (year < 1000 || year > 9999 || month < 1 || month > 12 || day < 1 || day > 31) {
        return false;
    }
    return true;
}
exports.default = isDate;
