"use strict";
const regexHasSpaces = /\s/;
const regexOnlyNumbers = /^\d+$/;
const regexStartsWithNumber = /^\d/;
const defaultErrorMsg = [
    'Invalid value passed',
    'username too short',
    'This username is too long',
    'Username cannot contain spaces',
    'Cannot start with number',
    'Cannot contain only numbers',
    'Unknown error',
];
/**
 * @param {string} username
 * @param {number} minLength optional
 * @param {number} maxLength optional
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @default minLength number: 1
 * @default maxLength number: Infinity
 * @example validateUsername('User999', 8, 20);
 * @example validateUsername('User999', 8, 20, ['My own errorsMsg']);
 * @info minLength cannot be greater than maxLength
 * @description This function returns 7 errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 *   [
  'Invalid value passed',
  'username too short',
  'This username is too long',
  'Username cannot contain spaces',
  'Cannot start with number',
  'Cannot contain only numbers',
  'Unknown error'
];
 *
 * Create a list of errors separated by commas in strings
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validateUsername(username, minLength = 1, maxLength = Infinity, errorMsg = defaultErrorMsg) {
    if (typeof username !== 'string')
        throw new TypeError('The input should be a string.');
    // Check para saber se as mensagens que sao passadas sao validas
    // caso contrario retorna um ERRO
    if (errorMsg) {
        if (!Array.isArray(errorMsg))
            throw new Error('errorMsg must be an Array or null');
        for (let index = 0; index < errorMsg.length; index += 1) {
            if (errorMsg[index] != null && typeof errorMsg[index] !== 'string') {
                throw new TypeError('All values within the array must be strings or null/undefined.');
            }
        }
    }
    // Função interna para obter a mensagem de erro
    function getErrorMessage(index) {
        if (errorMsg && index >= 0 && index < errorMsg.length && errorMsg[index] != null) {
            return errorMsg[index];
        }
        return defaultErrorMsg[index];
    }
    if (!username) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(0),
        };
    }
    const minLenthUsername = minLength;
    const maxLenthUsername = maxLength;
    if (minLenthUsername > maxLenthUsername) {
        throw new Error('Minimum cannot be greater than maximum');
    } // Verifica se o min é maior que o max
    if (minLenthUsername < 1 || maxLenthUsername < 1) {
        throw new Error('Size parameters cannot be less than one');
    } // Nenhum dos dois pode ser menor que 1
    try {
        if (regexHasSpaces.test(username)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(4),
            };
        }
        if (regexStartsWithNumber.test(username)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(5),
            };
        }
        if (regexOnlyNumbers.test(username)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(6),
            };
        }
        if (username.length < minLenthUsername) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
            };
        } // Tamanho n pode ser menor q o min
        if (username.length > maxLenthUsername) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(2),
            };
        } // Tamanho da palavra não pode ser maior que o tamanho máximo
        return {
            isValid: true,
            errorMsg: null,
        };
    }
    catch (error) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(3),
        };
    }
}
module.exports = validateUsername;
