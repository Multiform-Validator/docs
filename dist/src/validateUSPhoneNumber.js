"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultErrorMsg = ['Invalid value passed', 'Invalid phone number', 'Unknown error'];
function validateUSPhoneNumber(phoneNumber, errorMsg) {
    if (errorMsg === void 0) { errorMsg = defaultErrorMsg; }
    if (typeof phoneNumber !== 'string')
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
    var usPhoneNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})(\s?|-)\d{3}(\s?|-)\d{4}$/;
    function getErrorMessage(index) {
        if (index >= 0 && index < errorMsg.length && errorMsg[index] != null) {
            return errorMsg[index];
        }
        return defaultErrorMsg[index];
    }
    if (!phoneNumber) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(0),
        };
    }
    try {
        if (!usPhoneNumberRegex.test(phoneNumber)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
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
exports.default = validateUSPhoneNumber;
