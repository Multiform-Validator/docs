"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var regexHasSpaces = /\s/;
var regexOnlyNumbers = /^\d+$/;
var regexStartsWithNumber = /^\d/;
var defaultErrorMsg = [
    'Username cannot be empty',
    'username too short',
    'This username is too long',
    'Username cannot contain spaces',
    'Cannot start with number',
    'Cannot contain only numbers',
    'Unknown error',
];
function validateUsername(username, minLength, maxLength, errorMsg) {
    if (errorMsg === void 0) { errorMsg = defaultErrorMsg; }
    if (typeof username !== 'string')
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
    var minLenthUsername = minLength || 1;
    var maxLenthUsername = maxLength || Infinity;
    function getErrorMessage(index) {
        var errorMessage = errorMsg[index];
        if (errorMessage === 'username too short' || errorMessage === 'This username is too long') {
            if (maxLenthUsername === Infinity) {
                return "Username must be greater than ".concat(maxLenthUsername, " characters");
            }
            else {
                return "Username must be between ".concat(maxLenthUsername, " and ").concat(maxLenthUsername, " characters");
            }
        }
        return errorMessage != null ? errorMessage : defaultErrorMsg[index];
    }
    if (!username) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(0),
        };
    }
    if (typeof minLenthUsername !== 'number' || typeof maxLenthUsername !== 'number') {
        throw new Error('maxLength or minLength must be a number');
    }
    if (minLenthUsername > maxLenthUsername) {
        throw new Error('Minimum cannot be greater than maximum');
    }
    if (minLenthUsername < 1 || maxLenthUsername < 1) {
        throw new Error('Size parameters cannot be less than one');
    }
    try {
        if (regexHasSpaces.test(username)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(4),
            };
        }
        if (regexStartsWithNumber.test(username)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(5),
            };
        }
        if (regexOnlyNumbers.test(username)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(6),
            };
        }
        if (username.length < minLenthUsername) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
            };
        }
        if (username.length > maxLenthUsername) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(2),
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
            errorMsg: getErrorMessage(3),
        };
    }
}
exports.default = validateUsername;
