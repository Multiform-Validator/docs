"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function passwordStrengthTester(password) {
    if (typeof password !== 'string')
        throw new TypeError('The input should be a string.');
    var passwordLength = password.length;
    var strengthType;
    if (passwordLength < 6 && /^\d+$/.test(password)) {
        strengthType = 'veryWeak';
    }
    else if (passwordLength < 8 && /^\d+$/.test(password)) {
        strengthType = 'weak';
    }
    else if (passwordLength < 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
        strengthType = 'regular';
    }
    else if (/[A-Z]/.test(password)
        && /[!@#$%^&*(),.?":{}|<>]/.test(password)
        && /\d/.test(password)
        && /[a-zA-Z]/.test(password)) {
        strengthType = 'veryStrong';
    }
    else {
        strengthType = 'strong';
    }
    return strengthType;
}
exports.default = passwordStrengthTester;
