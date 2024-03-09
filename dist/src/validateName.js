"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultErrorMsg = [
    'Name cannot be empty',
    'Name cannot contain numbers', 'Name cannot contain special characters',
    'This name is not valid',
    'Name too big, try again',
    'Unknown error',
];
function validateName(name, minLength, maxLength, errorMsg) {
    if (errorMsg === void 0) { errorMsg = defaultErrorMsg; }
    if (typeof name !== 'string')
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
        var errorMessage = errorMsg[index];
        return errorMessage != null ? errorMessage : defaultErrorMsg[index];
    }
    var minNameLength = minLength || 1;
    var maxNameLength = maxLength || 20;
    if (maxNameLength < 1 || minNameLength < 1 || typeof minNameLength !== 'number' || typeof maxNameLength !== 'number') {
        throw new Error('maxLength or minLength must be a number and cannot be less than 1');
    }
    if (minNameLength > maxNameLength) {
        throw new Error('minLength cannot be greater than maxLength');
    }
    if (!name) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(0),
        };
    }
    try {
        if (name.length > maxNameLength) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(4),
            };
        }
        if (name.length < minNameLength) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(3),
            };
        }
        if (name.match(/\d/)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
            };
        }
        if (name.match(/[^\w\s]/)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(2),
            };
        }
        if (new Set(name).size === 1) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(3),
            };
        }
        var consecutiveCharsRegex = /(\w)\1\1/;
        if (consecutiveCharsRegex.test(name)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(3),
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
            errorMsg: getErrorMessage(5),
        };
    }
}
exports.default = validateName;
