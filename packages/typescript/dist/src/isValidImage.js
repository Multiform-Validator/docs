"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidImage(fileBuffer) {
    var isJpeg = fileBuffer[0] === 0xff && fileBuffer[1] === 0xd8 && fileBuffer[2] === 0xff;
    var isPng = fileBuffer[0] === 0x89 &&
        fileBuffer[1] === 0x50 &&
        fileBuffer[2] === 0x4e &&
        fileBuffer[3] === 0x47;
    return isJpeg || isPng;
}
exports.default = isValidImage;
