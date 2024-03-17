"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultErrorMsg = [
    'Surname cannot be empty',
    'Surname cannot contain numbers',
    'Surname cannot contain special characters',
    'This surname is not valid',
    'Surname too big, try again',
    'Unknown error',
];
function validateSurname(surname, minLength, maxLength, errorMsg) {
    if (errorMsg === void 0) { errorMsg = defaultErrorMsg; }
    if (typeof surname !== 'string')
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
        var errorMessage = errorMsg ? errorMsg[index] : null;
        return errorMessage != null ? errorMessage : defaultErrorMsg[index];
    }
    var minNameLength = minLength || 1;
    var maxNameLength = maxLength || 25;
    if (maxNameLength < 1 ||
        minNameLength < 1 ||
        typeof minNameLength !== 'number' ||
        typeof maxNameLength !== 'number') {
        throw new Error('maxLength or minLength must be a number and cannot be less than 1');
    }
    if (minNameLength > maxNameLength) {
        throw new Error('minLength cannot be greater than maxLength');
    }
    if (!surname) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(0),
        };
    }
    try {
        if (surname.length > maxNameLength) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(4),
            };
        }
        if (surname.length < minNameLength) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(3),
            };
        }
        if (surname.match(/\d/)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
            };
        }
        if (surname.match(/[^\w\s]/)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(2),
            };
        }
        if (new Set(surname).size === 1) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(3),
            };
        }
        var consecutiveCharsRegex = /(\w)\1\1/;
        if (consecutiveCharsRegex.test(surname)) {
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
exports.default = validateSurname;
