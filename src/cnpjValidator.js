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

/**
 * @param {string} cnpj
 * @example cpfIsValid('72.501.263/0001-40');
 * @example cpfIsValid('73.506.263/0001-45');
 * @returns {boolean}
 */
// Função para validar o CNPJ
function cnpjIsValid(cnpj) {
  try {
    if (!cnpj) return false;
    // Check if the CNPJ has 14 digits
    if (cnpj.length !== 14 || cnpj.length !== 18) return false;
    // Remove any non-digit characters from the CNPJ string
    const cnpjClean = cnpj.replace(/\D/g, '');

    // Convert the CNPJ string to an array of digits
    const cnpjArray = cnpjClean.split('').map(Number);
    // Calculate the first and second verifiers
    const firstVerifier = calculateFirstVerifier(cnpjArray.slice(0, 12));
    const secondVerifier = calculateSecondVerifier(cnpjArray.slice(0, 12).concat(firstVerifier), firstVerifier);
    // Check if the calculated verifiers match the ones in the CNPJ
    if (cnpjArray[12] === firstVerifier && cnpjArray[13] === secondVerifier) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
module.exports = cnpjIsValid;
