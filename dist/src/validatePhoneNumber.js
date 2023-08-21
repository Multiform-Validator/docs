"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultErrorMsg = ['Invalid value passed', 'Invalid phone number', 'Unknown error'];
function validatePhoneNumber(phoneNumber, errorMsg) {
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
    function getErrorMessage(index) {
        if (errorMsg && index >= 0 && index < errorMsg.length) {
            var errorMessage = errorMsg[index];
            return errorMessage != null ? errorMessage : defaultErrorMsg[index];
        }
        return defaultErrorMsg[index];
    }
    if (!phoneNumber) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(0),
        };
    }
    var phoneNumberRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    try {
        if (!phoneNumberRegex.test(phoneNumber)) {
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
exports.default = validatePhoneNumber;
