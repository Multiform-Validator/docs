import isEmpty from './isEmpty';
import isNumber from './isNumber';

/**
 * @example isCreditCardValid('6062 8226 8644 9791');
 * @example isCreditCardValid('6062822686449791');
 * @description Values have to be passed as a string
 * @returns return true or false
 */
function isCreditCardValid(cardNumber: string): boolean {
	if (typeof cardNumber !== 'string') throw new TypeError('The input should be a string.');

	const cleanedCreditCardInput: string = cardNumber.replace(/\D/g, '');

	if (isEmpty(cleanedCreditCardInput) || !isNumber(cleanedCreditCardInput)) {
		return false;
	}

	const digits: number[] = cardNumber.replace(/\D+/g, '').split('').map(Number);
	const tamanhoDoDigito: number = digits.length;
	let sum: number = 0;
	let isEven: boolean = false;
	for (let i: number = tamanhoDoDigito - 1; i >= 0; i -= 1) {
		let digit: number = digits[i];
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
export default isCreditCardValid;

// Função para validar o número do cartão usando o algoritmo de Luhn
