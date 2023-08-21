"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultErrorMsg = [
    'This textarea is too big',
    'Can not be empty',
    'Unknown error',
];
function validateTextarea(textarea, isRequired, maxLength, errorMsg) {
    if (isRequired === void 0) { isRequired = false; }
    if (errorMsg === void 0) { errorMsg = defaultErrorMsg; }
    if (typeof textarea !== 'string')
        throw new TypeError('The input should be a string.');
    if (errorMsg) {
        if (!Array.isArray(errorMsg))
            throw new Error('errorMsg must be an Array or null');
        for (var index = 0; index < errorMsg.length; index += 1) {
            if (errorMsg[index] != null && typeof errorMsg[index] !== 'string') {
                throw new TypeError('All values within the array must be strings or null/undefined.');
            }
        }
    }
    function getErrorMessage(index) {
        if (errorMsg && index >= 0 && index < errorMsg.length) {
            var errorMessage = errorMsg[index];
            return errorMessage != null ? errorMessage : defaultErrorMsg[index];
        }
        return defaultErrorMsg[index];
    }
    var maxTextAreaLength = maxLength || 50;
    if (maxTextAreaLength < 1 || typeof maxTextAreaLength !== 'number') {
        throw new Error('maxLength or minLength must be a number and cannot be less than 1');
    }
    if (isRequired === true) {
        if (textarea === '') {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
            };
        }
    }
    try {
        if (textarea.length > maxTextAreaLength) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(0),
            };
        }
        return {
            isValid: true,
            errorMsg: null,
        };
    }
    catch (error) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(2),
        };
    }
}
exports.default = validateTextarea;
