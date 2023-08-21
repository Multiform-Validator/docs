"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNumber(value) {
    if (value === null || value === undefined || typeof value === 'boolean') {
        return false;
    }
    if (typeof value === 'string') {
        return !Number.isNaN(parseFloat(value)) && Number.isFinite(parseFloat(value));
    }
    if (typeof value === 'number') {
        return Number.isFinite(value);
    }
    return false;
}
exports.default = isNumber;
