"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidVideo(fileBuffer) {
    var isMp4 = fileBuffer[0] === 0x00 &&
        fileBuffer[1] === 0x00 &&
        fileBuffer[2] === 0x00 &&
        fileBuffer[3] === 0x20 &&
        fileBuffer[4] === 0x66 &&
        fileBuffer[5] === 0x74 &&
        fileBuffer[6] === 0x79 &&
        fileBuffer[7] === 0x70 &&
        fileBuffer[8] === 0x6d &&
        fileBuffer[9] === 0x70 &&
        fileBuffer[10] === 0x34 &&
        fileBuffer[11] === 0x32;
    var isMov = fileBuffer[0] === 0x00 &&
        fileBuffer[1] === 0x00 &&
        fileBuffer[2] === 0x00 &&
        fileBuffer[3] === 0x14 &&
        fileBuffer[4] === 0x66 &&
        fileBuffer[5] === 0x74 &&
        fileBuffer[6] === 0x79 &&
        fileBuffer[7] === 0x70 &&
        fileBuffer[8] === 0x71 &&
        fileBuffer[9] === 0x74 &&
        fileBuffer[10] === 0x20 &&
        fileBuffer[11] === 0x20;
    var isMkv = fileBuffer[0] === 0x1a &&
        fileBuffer[1] === 0x45 &&
        fileBuffer[2] === 0xdf &&
        fileBuffer[3] === 0xa3;
    return isMp4 || isMov || isMkv;
}
exports.default = isValidVideo;
