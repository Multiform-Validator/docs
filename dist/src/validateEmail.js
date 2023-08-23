"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isEmail_1 = __importDefault(require("./isEmail"));
var defaultErrorMsg = [
    'Invalid value passed',
    'This e-mail is not valid',
    'Email too big, try again',
    'This email is not valid in the country',
    'Email domain is not allowed.',
    'Unknown error',
];
var validDomainsDefault = ['@gmail.com', '@outlook.com', '@yahoo.com', '@icloud.com', '@hotmail.com',
    '@mail.ru', '@yandex.ru', '@gmx.com', '@zoho.com', '@protonmail.com', '@protonmail.ch'
];
function validateEmail(email, maxLength, country, errorMsg, validDomains) {
    if (country === void 0) { country = ''; }
    if (errorMsg === void 0) { errorMsg = defaultErrorMsg; }
    if (validDomains === void 0) { validDomains = false; }
    if (typeof email !== 'string')
        throw new TypeError('The input should be a string.');
    var regex = /(?:)/;
    if (validDomains === true) {
        regex = new RegExp("".concat(validDomainsDefault.join('|'), "$"), 'i');
    }
    else if (Array.isArray(validDomains) && validDomains.length > 0) {
        var validDomainsCustom = validDomains.map(function (domain) { return domain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
        regex = new RegExp("".concat(validDomainsCustom.join('|'), "$"), 'i');
    }
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
    if (!email) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(0),
        };
    }
    var maxEmailLength = maxLength || 400;
    if (maxEmailLength < 1 || typeof maxEmailLength !== 'number')
        throw new Error('maxLength must be a number and cannot be less than 1');
    try {
        if (regex && !regex.test(email)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(4),
            };
        }
        if (!((0, isEmail_1.default)(email))) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
            };
        }
        if (email.length > maxEmailLength) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(2),
            };
        }
        if (country) {
            if (!email.endsWith(".".concat(country))) {
                return {
                    isValid: false,
                    errorMsg: getErrorMessage(3),
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
            errorMsg: getErrorMessage(5),
        };
    }
}
exports.default = validateEmail;
