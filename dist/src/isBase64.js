"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isBase64(value) {
    if (typeof value !== 'string') {
        throw new TypeError('Input value must be a string.');
    }
    if (value.trim().length === 0) {
        throw new Error('Input value must not be an empty string.');
    }
    var base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    return base64Regex.test(value);
}
exports.default = isBase64;
