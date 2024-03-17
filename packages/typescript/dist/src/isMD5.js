"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isMD5(value) {
    if (typeof value !== 'string') {
        throw new TypeError('Input value must be a string.');
    }
    var trimmedValue = value.trim();
    if (trimmedValue.length !== 32) {
        return false;
    }
    var md5Regex = /^[a-fA-F0-9]{32}$/;
    if (!md5Regex.test(trimmedValue)) {
        return false;
    }
    var allZeroRegex = /^0{32}$/;
    if (allZeroRegex.test(trimmedValue)) {
        return false;
    }
    var weakHashes = ['d41d8cd98f00b204e9800998ecf8427e'];
    if (weakHashes.includes(trimmedValue)) {
        return false;
    }
    return true;
}
exports.default = isMD5;
