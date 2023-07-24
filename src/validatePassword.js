const defaultErrorMsg = [
  'Invalid value passed',
  'This password is too long',
  'password too short',
  'Requires at least one capital letter',
  'Requires at least one special character',
  'Requires at least one number',
  'Requires at least one letter',
  'Unknown error',
  'Check the parameters, invalid values, this error does not come out to the end user',
];

/**
 * @param {string} password
 * @param {number} minLength optional
 * @param {number} maxLength optional
 * @param {object} options optional
 * @param {string[]} errorMsg optional
 * @param {boolean} options.requireUppercase optional
 * @param {boolean} options.requireSpecialChar optional
 * @param {boolean} options.requireNumber optional
 * @param {boolean} options.requireString optional
 * @default minLength number: 1
 * @default maxLength number: Infinity
 * @default options.requireUppercase: false
 * @default options.requireSpecialChar: false -> Examples !@#$%^&*(),.?":{}|<>
 * @default options.requireNumber: false
 * @default options.requireString: false
 * @example validatePassword('MyP@ssw0rd', 8, 20, { requireUppercase: true, requireSpecialChar: true, requireNumber: true, requireString: true });
 * @example validatePassword('MyP@ssw0rd', 8, 20, { requireUppercase: true, requireSpecialChar: true, requireNumber: true, requireString: true }, ['My own error msg']);
 * @info minLength cannot be greater than maxLength
 * @description This function returns 8 errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 *   ['Invalid value passed',
  'This password is too long',
  'password too short',
  'Requires at least one capital letter',
  'Requires at least one special character',
  'Requires at least one number',
  'Requires at least one letter',
  'Unknown error']
 *
 * Create a list of errors separated by commas in strings
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validatePassword(password, minLength, maxLength, {
  requireUppercase = false,
  requireSpecialChar = false,
  requireNumber = false,
  requireString = false,
} = {}, errorMsg = []) {
  // Check para saber se as mensagens que sao passadas sao validas
  // caso contrario retorna um ERRO
  if (errorMsg) {
    if (!Array.isArray(errorMsg)) throw new Error('Must be an Array');
    for (let index = 0; index < errorMsg.length; index += 1) {
      if (typeof errorMsg[index] !== 'string') {
        throw new Error('All values within the array must be strings');
      }
    }
  }

  // Função interna para obter a mensagem de erro
  function getErrorMessage(index) {
    if (errorMsg && index >= 0 && index < errorMsg.length) {
      return errorMsg[index];
    }
    return defaultErrorMsg[index];
  }

  if (!password) {
    return {
      isValid: false,
      errorMsg: getErrorMessage(0),
    };
  }
  const minLenthPassword = parseInt(minLength, 10) || 1;
  const maxLenthPassword = parseInt(maxLength, 10) || Infinity;
  try {
    const passwordString = password.toString();
    if (minLenthPassword > maxLenthPassword) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(8),
      };
    } // Verifica se o min é maior que o max
    if (minLenthPassword < 1 || maxLenthPassword < 1) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(8),
      };
    } // Nenhum dos dois pode ser menor que 1
    if (passwordString.length > maxLenthPassword) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(1),
      };
    } // Tamanho da palavra não pode ser maior que o tamanho máximo
    if (passwordString.length < minLenthPassword) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(2),
      };
    } // Tamanho n pode ser menor q o min

    // Password validation rules
    if (requireUppercase && !/[A-Z]/.test(passwordString)) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(3), // Requer pelo menos uma letra maiuscula
      };
    }
    if (requireSpecialChar && !/[!@#$%^&*(),.?":{}|<>]/.test(passwordString)) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(4), // Requer pelo menos uma especial caracter
      };
    }
    if (requireNumber && !/\d/.test(passwordString)) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(5), // Requer pelo menos um numero
      };
    }
    if (requireString && !/[a-zA-Z]/.test(passwordString)) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(6), // Requer pelo menos uma letra
      };
    }
    return {
      isValid: true,
      errorMsg: null,
    };
  } catch (error) {
    return {
      isValid: false,
      errorMsg: getErrorMessage(7),
    };
  }
}

module.exports = validatePassword;
