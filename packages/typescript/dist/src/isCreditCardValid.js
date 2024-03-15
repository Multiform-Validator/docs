"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty_1 = __importDefault(require("./isEmpty"));
var isNumber_1 = __importDefault(require("./isNumber"));
function isCreditCardValid(cardNumber) {
    if (typeof cardNumber !== 'string')
        throw new TypeError('The input should be a string.');
    var cleanedCreditCardInput = cardNumber.replace(/\D/g, '');
    if ((0, isEmpty_1.default)(cleanedCreditCardInput) || !(0, isNumber_1.default)(cleanedCreditCardInput)) {
        return false;
    }
    var digits = cardNumber.replace(/\D+/g, '').split('').map(Number);
    var tamanhoDoDigito = digits.length;
    var sum = 0;
    var isEven = false;
    for (var i = tamanhoDoDigito - 1; i >= 0; i -= 1) {
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
