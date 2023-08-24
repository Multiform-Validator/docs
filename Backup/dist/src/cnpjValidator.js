"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateFirstVerifier(cnpjBase) {
    var weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 12; i += 1) {
        sum += cnpjBase[i] * weight[i];
    }
    var remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
}
function calculateSecondVerifier(cnpjBase, firstVerifier) {
    var weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 12; i += 1) {
        sum += cnpjBase[i] * weight[i];
    }
    sum += firstVerifier * weight[12];
    var remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
}
var defaultErrorMsg = ['CNPJ invalid', 'CNPJ must have 14 numerical digits', 'CNPJ is not valid', 'Unknown error'];
function cnpjIsValid(cnpj, errorMsg) {
    if (errorMsg === void 0) { errorMsg = defaultErrorMsg; }
    if (typeof cnpj !== 'string')
        throw new TypeError('The input should be a string.');
    if (errorMsg) {
        if (!Array.isArray(errorMsg))
            throw new Error('Must be an Array');
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
    try {
        if (!cnpj) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(0),
            };
        }
        if (cnpj.length !== 14 && cnpj.length !== 18) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
            };
        }
        var cnpjClean = cnpj.replace(/\D+/g, '');
        var cnpjArray = cnpjClean.split('').map(Number);
        var firstVerifier = calculateFirstVerifier(cnpjArray.slice(0, 12));
        var secondVerifier = calculateSecondVerifier(cnpjArray.slice(0, 12).concat(firstVerifier), firstVerifier);
        if (cnpjArray[12] === firstVerifier && cnpjArray[13] === secondVerifier) {
            return {
                isValid: true,
                errorMsg: null,
            };
        }
        return {
            isValid: false,
            errorMsg: getErrorMessage(2),
        };
    }
    catch (error) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(3),
        };
    }
}
exports.default = cnpjIsValid;
