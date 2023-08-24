"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEmpty(value) {
    if (typeof value !== 'string') {
        throw new TypeError('Input value must be a string.');
    }
    return value.trim().length === 0;
}
exports.default = isEmpty;
