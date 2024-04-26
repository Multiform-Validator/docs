"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidPdf(fileBuffer) {
    var isPdf = fileBuffer[0] === 0x25 &&
        fileBuffer[1] === 0x50 &&
        fileBuffer[2] === 0x44 &&
        fileBuffer[3] === 0x46;
    return isPdf;
}
exports.default = isValidPdf;
