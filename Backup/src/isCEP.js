/**
 * @param {string} cep
 * @example isCEP('12345-678');
 * @example isCEP('12345678');
 * @example isCEP('12.345-678');
 * @returns {boolean}
 */
function isCEP(cep) {
  if (typeof cep !== 'string') {
    throw new TypeError('Input value must be a string.');
  }
  try {
    if (cep.length < 8 || cep.length > 10) return false;
    // Clean the CEP and keep only the numbers
    const cepString = cep.replace(/\D/g, ''); // The \D pattern matches any non-digit character
    // Check if the cleaned CEP contains only numbers
    if (cepString.length !== 8) return false;
    // Check if the CEP is a valid number (all digits)
    if (Number.isNaN(cepString)) return false;
    return true;
  } catch (error) {
    return false;
  }
}
module.exports = isCEP;
