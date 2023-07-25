const isEmail = require('./isEmail');

const defaultErrorMsg = [
  'Invalid value passed',
  'This e-mail is not valid',
  'Email too big, try again',
  'This email is not valid in the country',
  'Unknown error',
];
/**
 * @param {string} email
 * @param {number} maxLength optional
 * @param {string} country optional
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @default maxLength number: 400
 * @example validateEmail('foor@bar.com', 30, 'us);
 * @example validateEmail('foor@bar.com', 30, 'br);
 * @example validateEmail('foor@bar.com', 30);
 * @example validateEmail('foor@bar.com', 30, null, ['My own error message']); Country is set to null
 * @description This function returns five errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 * ['Invalid value passed', 'This e-mail is not valid', 'Email too big, try again', 'This email is not valid in the country', 'Unknown error']
 *
 * Create a list of errors separated by commas in strings
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validateEmail(email, maxLength, country, errorMsg = defaultErrorMsg) {
  if (typeof email !== 'string') throw new TypeError('The input should be a string.');

  // Check para saber se as mensagens que sao passadas sao validas
  // caso contrario retorna um ERRO
  if (errorMsg) {
    if (!Array.isArray(errorMsg)) throw new Error('errorMsg must be an Array');
    for (let index = 0; index < errorMsg.length; index += 1) {
      if (index === 0 && errorMsg[index] !== null && errorMsg[index] !== undefined) {
        throw new Error('The first error message should be null or undefined to use the default value.');
      }
      if (errorMsg[index] !== null && typeof errorMsg[index] !== 'string') {
        throw new Error('All values within the array must be strings or null/undefined.');
      }
    }
  }

  // Função interna para obter a mensagem de erro
  function getErrorMessage(index) {
    if (errorMsg && index >= 0 && index < errorMsg.length && errorMsg[index] !== null) {
      return errorMsg[index];
    }
    return defaultErrorMsg[index];
  }

  if (!email) {
    return {
      isValid: false,
      errorMsg: getErrorMessage(0),
    };
  }
  const maxEmailLength = maxLength || 400;
  try {
    const emailString = email.toString(); // apenas por segurança
    if (!(isEmail(emailString))) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(1),
      };
    }
    if (emailString.length > maxEmailLength) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(2),
      };
    }
    // If country is provided, check if the email ends with the country code
    if (country) {
      if (!emailString.endsWith(`.${country}`)) {
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
  } catch (error) {
    return {
      isValid: false,
      errorMsg: getErrorMessage(4),
    };
  }
}
module.exports = validateEmail;
