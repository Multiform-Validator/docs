"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function passwordStrengthTester(password) {
    if (typeof password !== 'string')
        throw new TypeError('The input should be a string.');
    var passwordLength = password.length;
    var strengthType = 'unknow';
    switch (true) {
        case passwordLength <= 5 && /^\d+$/.test(password):
            strengthType = 'veryWeak';
            break;
        case (passwordLength <= 5 && /^[a-zA-Z0-9]+$/.test(password)) || (passwordLength >= 6 && /^[a-zA-Z0-9]+$/.test(password) && passwordLength <= 7) || (passwordLength < 10 && /(.)\1{3,}/.test(password)) || (passwordLength >= 5 && passwordLength <= 8 && /^\d+$/.test(password)):
            strengthType = 'weak';
            break;
        case /(.)\1{5,}/.test(password) && passwordLength > 10:
            strengthType = 'regular';
            break;
        case (passwordLength > 16) || (password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[\W_]/.test(password)):
            strengthType = 'veryStrong';
            break;
        case (passwordLength >= 13 && passwordLength <= 16) || (password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password)):
            strengthType = 'strong';
            break;
        case (passwordLength >= 9 && passwordLength <= 12) || (password.length >= 6 && password.length <= 8 && /[0-9]/.test(password) && /[a-zA-Z]/.test(password)):
            strengthType = 'regular';
            break;
        default:
            break;
    }
    return strengthType;
}
exports.default = passwordStrengthTester;
