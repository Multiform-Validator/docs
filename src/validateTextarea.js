"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultErrorMsg = [
    'This textarea is too big',
    'Can not be empty',
    'Unknown error',
];
/**
 * @default isRequired boolean: default: false
 * @default maxLength number: default: 50
 * @description This function returns 2 errors in the following order,
 *
 * default:
 * [
  'Textarea cannot exceed ${maxTextAreaLength} characters',
  'Can not be empty',
  'Unknown error',
];
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validateTextarea(textarea, isRequired, maxLength, errorMsg) {
    if (isRequired === void 0) { isRequired = false; }
    if (errorMsg === void 0) { errorMsg = defaultErrorMsg; }
    if (typeof textarea !== 'string')
        throw new TypeError('The input should be a string.');
    // Check para saber se as mensagens que sao passadas sao validas
    // caso contrario retorna um ERRO
    if (errorMsg) {
        if (!Array.isArray(errorMsg))
            throw new Error('errorMsg must be an Array or null');
        for (var index = 0; index < errorMsg.length; index += 1) {
            if (errorMsg[index] != null && typeof errorMsg[index] !== 'string') {
                throw new TypeError('All values within the array must be strings or null/undefined.');
            }
        }
    }
    var maxTextAreaLength = maxLength || 50;
    // Função interna para obter a mensagem de erro
    function getErrorMessage(index) {
        var errorMessage = errorMsg[index];
        if (errorMessage === 'This textarea is too big') {
            return "Textarea cannot exceed ".concat(maxTextAreaLength, " characters");
        }
        return errorMessage != null ? errorMessage : defaultErrorMsg[index];
    }
    if (maxTextAreaLength < 1 || typeof maxTextAreaLength !== 'number') {
        throw new Error('maxLength or minLength must be a number and cannot be less than 1');
    }
    if (isRequired === true) {
        if (textarea === '') {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
            };
        }
    }
    try {
        if (textarea.length > maxTextAreaLength) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(0),
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
exports.default = validateTextarea;
