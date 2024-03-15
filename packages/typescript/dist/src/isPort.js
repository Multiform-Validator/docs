"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPort(value) {
    if (typeof value !== 'string' && typeof value !== 'number') {
        throw new TypeError('Input value must be a string or a number.');
    }
    var portNumber = parseInt(String(value), 10);
    return Number.isInteger(portNumber) && portNumber >= 1 && portNumber <= 65535;
}
exports.default = isPort;
