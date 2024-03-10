"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Função para calcular o primeiro dígito verificador
function calculateFirstVerifier(cnpjBase) {
    var weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 12; i += 1) {
        sum += cnpjBase[i] * weight[i];
    }
    var remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
}
// Função para calcular o segundo dígito verificador
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
/**
 * @param cnpj
 * @param errorMsg optional
 * @example cpfIsValid('72.501.263/0001-40');
 * @description This function returns four errors in the following order,
 *
 * If you want to use a default parameter, use null or leave Empty.
 *
 * Default:
 * ['CNPJ invalid', 'CNPJ must have 14 numerical digits', 'CNPJ is not valid', 'Unknown error']
 * .
 *
 * Create a list of errors separated by commas in strings
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function cnpjIsValid(cnpj, errorMsg) {
    if (errorMsg === void 0) { errorMsg = defaultErrorMsg; }
    if (typeof cnpj !== 'string')
        throw new TypeError('The input should be a string.');
    // Check para saber se as mensagens que sao passadas sao validas
    // caso contrario retorna um ERRO
    if (errorMsg) {
        if (!Array.isArray(errorMsg))
            throw new Error('Must be an Array');
        for (var index = 0; index < errorMsg.length; index += 1) {
            if (errorMsg[index] != null && typeof errorMsg[index] !== 'string') {
                throw new TypeError('All values within the array must be strings or null/undefined.');
            }
        }
    }
    // Função interna para obter a mensagem de erro
    function getErrorMessage(index) {
        var errorMessage = errorMsg[index];
        return errorMessage != null ? errorMessage : defaultErrorMsg[index];
    }
    try {
        if (!cnpj) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(0), // 'CNPJ invalid'
            };
        }
        // Check if the CNPJ has 14 digits
        if (cnpj.length !== 14 && cnpj.length !== 18) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1), // 'CNPJ must have 14 numerical digits'
            };
        }
        // Remove any non-digit characters from the CNPJ string
        var cnpjClean = cnpj.replace(/\D+/g, '');
        // Convert the CNPJ string to an array of digits
        var cnpjArray = cnpjClean.split('').map(Number);
        // Calculate the first and second verifiers
        var firstVerifier = calculateFirstVerifier(cnpjArray.slice(0, 12));
        var secondVerifier = calculateSecondVerifier(cnpjArray.slice(0, 12).concat(firstVerifier), firstVerifier);
        // Check if the calculated verifiers match the ones in the CNPJ
        if (cnpjArray[12] === firstVerifier && cnpjArray[13] === secondVerifier) {
            return {
                isValid: true,
                errorMsg: null,
            };
        }
        return {
            isValid: false,
            errorMsg: getErrorMessage(2), // 'CNPJ is not valid'
        };
    }
    catch (error) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(3), // 'Unknown error'
        };
    }
}
exports.default = cnpjIsValid;
