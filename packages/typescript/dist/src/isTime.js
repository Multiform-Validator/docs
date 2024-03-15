"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isTime(time) {
    if (typeof time !== 'string') {
        throw new TypeError('Input value must be a string.');
    }
    var timeRegex = /^(?:2[0-3]|1\d|0?[0-9]):[0-5]\d(?::[0-5]\d)?(?: [APap][Mm])?$/;
    return timeRegex.test(time);
}
exports.default = isTime;
