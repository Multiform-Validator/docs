"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isMACAddress(mac) {
    if (typeof mac !== 'string') {
        throw new TypeError('The input should be a string.');
    }
    var cleanedMac = mac.replace(/[^0-9A-Fa-f]/g, '');
    if (cleanedMac.length !== 12) {
        return false;
    }
    var macPattern = /^([0-9A-Fa-f]{2}){6}$/;
    return macPattern.test(cleanedMac);
}
exports.default = isMACAddress;
