/**
 * @param {string} cardNumber
 * @example isCreditCardValid('6062 8226 8644 9791');
 * @example isCreditCardValid('6062822686449791');
 * @description Values have to be passed as a string
 * @returns {boolean} return true or false
 */
function isCreditCardValid(cardNumber: string) {
  if (typeof cardNumber !== 'string') throw new TypeError('The input should be a string.');
  const digits = cardNumber.replace(/\D+/g, '').split('').map(Number);
  const { length } = digits;
  let sum = 0;
  let isEven = false;
  for (let i = length - 1; i >= 0; i -= 1) {
    let digit = digits[i];
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}
export = isCreditCardValid;

// Função para validar o número do cartão usando o algoritmo de Luhn
