const defaultErrorMsg = [
  'Invalid value passed',
  'username too short',
  'This username is too long',
  'Unknown error',
  'Check the parameters, invalid values, this error does not come out to the end user',
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
 * @description This function returns 4 errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 *   [
  'Invalid value passed',
  'username too short',
  'This username is too long',
  'Unknown error',
];
 *
 * Create a list of errors separated by commas in strings
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validateUsername(username, minLength, maxLength, errorMsg = defaultErrorMsg) {
  if (typeof username !== 'string') throw new TypeError('The input should be a string.');

  // Check para saber se as mensagens que sao passadas sao validas
  // caso contrario retorna um ERRO
  if (errorMsg) {
    if (!Array.isArray(errorMsg)) throw new Error('Must be an Array');
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
  const minLenthUsername = parseInt(minLength, 10) || 1;
  const maxLenthUsername = parseInt(maxLength, 10) || Infinity;
  try {
    const usernameString = username.toString();
    if (minLenthUsername > maxLenthUsername) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(4),
      };
    } // Verifica se o min é maior que o max
    if (minLenthUsername < 1 || maxLenthUsername < 1) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(4),
      };
    } // Nenhum dos dois pode ser menor que 1
    if (usernameString.length < minLenthUsername) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(1),
      };
    } // Tamanho n pode ser menor q o min
    if (usernameString.length > maxLenthUsername) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(2),
      };
    } // Tamanho da palavra não pode ser maior que o tamanho máximo
    return {
      isValid: true,
      errorMsg: null,
    };
  } catch (error) {
    return {
      isValid: false,
      errorMsg: getErrorMessage(3),
    };
  }
}

module.exports = validateUsername;
