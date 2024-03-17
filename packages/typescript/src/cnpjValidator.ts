// Função para calcular o primeiro dígito verificador
function calculateFirstVerifier(cnpjBase: number[]): number {
	const weight: Array<number> = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
	let sum: number = 0;
	for (let i: number = 0; i < 12; i += 1) {
		sum += cnpjBase[i] * weight[i];
	}
	const remainder: number = sum % 11;
	return remainder < 2 ? 0 : 11 - remainder;
}
// Função para calcular o segundo dígito verificador
function calculateSecondVerifier(cnpjBase: number[], firstVerifier: number): number {
	const weight: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
	let sum: number = 0;
	for (let i: number = 0; i < 12; i += 1) {
		sum += cnpjBase[i] * weight[i];
	}
	sum += firstVerifier * weight[12];
	const remainder: number = sum % 11;
	return remainder < 2 ? 0 : 11 - remainder;
}

const defaultErrorMsg: string[] = [
	'CNPJ invalid',
	'CNPJ must have 14 numerical digits',
	'CNPJ is not valid',
	'Unknown error',
];

/**
 * @param cnpj
 * @param errorMsg optional
 * @example cpfIsValid('72.501.263/0001-40');
 * @description This function returns four errors in the following order,
 *
 * If you want to use a default parameter, use null or leave Empty.
 *
 * Default:
 * ['CNPJ invalid', 'CNPJ must have 14 numerical digits', 'CNPJ is not valid', 'Unknown error']
 * .
 *
 * Create a list of errors separated by commas in strings
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */

function cnpjIsValid(
	cnpj: string,
	errorMsg: (string | null)[] | null = defaultErrorMsg,
): {
	isValid: boolean;
	errorMsg: string | null;
} {
	if (typeof cnpj !== 'string') throw new TypeError('The input should be a string.');
	// Check para saber se as mensagens que sao passadas sao validas
	// caso contrario retorna um ERRO
	if (errorMsg) {
		if (!Array.isArray(errorMsg)) throw new Error('Must be an Array');
		for (let index: number = 0; index < errorMsg.length; index += 1) {
			if (errorMsg[index] != null && typeof errorMsg[index] !== 'string') {
				throw new TypeError('All values within the array must be strings or null/undefined.');
			}
		}
	}

	// Função interna para obter a mensagem de erro
	function getErrorMessage(index: number): string {
		const errorMessage: string | null = errorMsg ? errorMsg[index] : null;
		return errorMessage != null ? errorMessage : defaultErrorMsg[index];
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
		const cnpjClean: string = cnpj.replace(/\D+/g, '');
		// Convert the CNPJ string to an array of digits
		const cnpjArray: number[] = cnpjClean.split('').map(Number);
		// Calculate the first and second verifiers
		const firstVerifier: number = calculateFirstVerifier(cnpjArray.slice(0, 12));
		const secondVerifier: number = calculateSecondVerifier(
			cnpjArray.slice(0, 12).concat(firstVerifier),
			firstVerifier,
		);
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
export default cnpjIsValid;
