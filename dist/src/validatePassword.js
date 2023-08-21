"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultErrorMsg = [
    'This password is too long',
    'password too short',
    'Requires at least one capital letter',
    'Requires at least one special character',
    'Requires at least one number',
    'Requires at least one letter',
    'Unknown error',
];
function validatePassword(password, minLength, maxLength, options, errorMsg) {
    if (options === void 0) { options = {
        requireUppercase: false,
        requireSpecialChar: false,
        requireNumber: false,
        requireString: false,
    }; }
    if (errorMsg === void 0) { errorMsg = defaultErrorMsg; }
    if (typeof password !== 'string')
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
        if (errorMsg && index >= 0 && index < errorMsg.length && errorMsg[index] != null) {
            return errorMsg[index];
        }
        return defaultErrorMsg[index];
    }
    var minLenthPassword = minLength || 1;
    var maxLenthPassword = maxLength || Infinity;
    if (typeof minLenthPassword !== 'number' || typeof maxLenthPassword !== 'number') {
        throw new Error('maxLength and/or minLength must be a number');
    }
    if (minLenthPassword > maxLenthPassword) {
        throw new Error('the minimum size cannot be larger than the maximum');
    }
    if (minLenthPassword < 1 || maxLenthPassword < 1) {
        throw new Error('No size can be smaller than 1');
    }
    try {
        if (password.length > maxLenthPassword) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(0),
            };
        }
        if (password.length < minLenthPassword) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
            };
        }
        if (options != null) {
            if (options.requireUppercase && !/[A-Z]/.test(password)) {
                return {
                    isValid: false,
                    errorMsg: getErrorMessage(2),
                };
            }
            if (options.requireSpecialChar && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                return {
                    isValid: false,
                    errorMsg: getErrorMessage(3),
                };
            }
            if (options.requireNumber && !/\d/.test(password)) {
                return {
                    isValid: false,
                    errorMsg: getErrorMessage(4),
                };
            }
            if (options.requireString && !/[a-zA-Z]/.test(password)) {
                return {
                    isValid: false,
                    errorMsg: getErrorMessage(5),
                };
            }
        }
        return {
            isValid: true,
            errorMsg: null,
        };
    }
    catch (error) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(6),
        };
    }
}
exports.default = validatePassword;
