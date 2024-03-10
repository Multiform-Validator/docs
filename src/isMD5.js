"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example isMD5('d41d8cd98f00b204e9800998ecf8427e'); // true
 * @example isMD5('6df23dc03f9b54cc38a0fc1483df6e21'); // true
 * @example isMD5('Hello'); // false (not a valid MD5 hash)
 * @example isMD5('123'); // false (not a valid MD5 hash)
 * @example isMD5('d41d8cd98f00b204e9800998ecf8427e123'); // false (too long)
 * @description Values have to be passed as a string
 * @returns true or false
 */
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
    var weakHashes = [
        'd41d8cd98f00b204e9800998ecf8427e',
    ];
    if (weakHashes.includes(trimmedValue)) {
        return false;
    }
    return true;
}
exports.default = isMD5;
