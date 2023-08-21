"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isCreditCardValid(cardNumber) {
    if (typeof cardNumber !== 'string')
        throw new TypeError('The input should be a string.');
    var digits = cardNumber.replace(/\D+/g, '').split('').map(Number);
    var length = digits.length;
    var sum = 0;
    var isEven = false;
    for (var i = length - 1; i >= 0; i -= 1) {
        var digit = digits[i];
        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        isEven = !isEven;
    }
    return sum % 10 === 0;
}
exports.default = isCreditCardValid;
