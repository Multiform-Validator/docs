"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEmail(email) {
    try {
        if (typeof email !== 'string')
            throw new TypeError('Invalid input, must be a string');
        if (!email)
            throw new Error('Value cannot be null or empty');
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (Number(email[0]))
            return false;
        if (!(regex.test(email)))
            return false;
        var depoisDoArroba = email.indexOf('@') + 1;
        var depoisDoUltimoPonto = email.lastIndexOf('.');
        if (Number(email[depoisDoArroba]))
            return false;
        if (Number(email[depoisDoUltimoPonto]))
            return false;
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.default = isEmail;
