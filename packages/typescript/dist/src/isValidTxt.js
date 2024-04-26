"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidTxt(fileBuffer) {
    var isTxt = fileBuffer[0] === 0x74 &&
        fileBuffer[1] === 0x65 &&
        fileBuffer[2] === 0x78 &&
        fileBuffer[3] === 0x74;
    return isTxt;
}
exports.default = isValidTxt;
