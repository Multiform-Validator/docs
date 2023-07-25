// Função para calcular o primeiro dígito verificador
function calculateFirstVerifier(cnpjBase) {
  const weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 12; i += 1) {
    sum += cnpjBase[i] * weight[i];
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}
// Função para calcular o segundo dígito verificador
function calculateSecondVerifier(cnpjBase, firstVerifier) {
  const weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 12; i += 1) {
    sum += cnpjBase[i] * weight[i];
  }
  sum += firstVerifier * weight[12];
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

const defaultErrorMsg = ['CNPJ invalid', 'CNPJ must have 14 numerical digits', 'CNPJ is not valid', 'Unknown error'];

/**
 * @param {string} cnpj
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @example cpfIsValid('72.501.263/0001-40');
 * @example cpfIsValid('73.506.263/0001-45');
 * @example cpfIsValid('73.506.263/0001-45', ['CNPJ ta errado']);
 * @description This function returns four errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 * ['CNPJ invalid', 'CNPJ must have 14 numerical digits', 'CNPJ is not valid', 'Unknown error']
 * .
 *
 * Create a list of errors separated by commas in strings
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
// Função para validar o CNPJ
function cnpjIsValid(cnpj, errorMsg = defaultErrorMsg) {
  if (typeof cnpj !== 'string') throw new TypeError('The input should be a string.');

  // Check para saber se as mensagens que sao passadas sao validas
  // caso contrario retorna um ERRO
  if (errorMsg) {
    if (!Array.isArray(errorMsg)) throw new TypeError('Must be an Array');
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
    const cnpjClean = cnpj.replace(/\D/g, '');

    // Convert the CNPJ string to an array of digits
    const cnpjArray = cnpjClean.split('').map(Number);
    // Calculate the first and second verifiers
    const firstVerifier = calculateFirstVerifier(cnpjArray.slice(0, 12));
    const secondVerifier = calculateSecondVerifier(cnpjArray.slice(0, 12).concat(firstVerifier), firstVerifier);
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
  } catch (error) {
    return {
      isValid: false,
      errorMsg: getErrorMessage(3), // 'Unknown error'
    };
  }
}
module.exports = cnpjIsValid;
