"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidAudio(fileBuffer) {
    var isMp3 = fileBuffer[0] === 0x49 && fileBuffer[1] === 0x44 && fileBuffer[2] === 0x33;
    var isWav = fileBuffer[0] === 0x52 &&
        fileBuffer[1] === 0x49 &&
        fileBuffer[2] === 0x46 &&
        fileBuffer[3] === 0x46;
    return isMp3 || isWav;
}
exports.default = isValidAudio;
