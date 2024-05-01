import { ValidateFunctions } from './types';

const regexHasSpaces: RegExp = /\s/;
const regexOnlyNumbers: RegExp = /^\d+$/;
const regexStartsWithNumber: RegExp = /^\d/;
const defaultErrorMsg: string[] = [
	'Username cannot be empty',
	'username too short',
	'This username is too long',
	'Username cannot contain spaces',
	'Cannot start with a number',
	'Cannot contain only numbers',
	'Unknown error',
];
/**
 * @param username
 * @param minLength optional
 * @param maxLength optional
 * @param errorMsg optional
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
  'Username cannot be empty',
  'Username must be between ${maxLenthUsername} and ${maxLenthUsername} characters',
  'Username must be between ${maxLenthUsername} and ${maxLenthUsername} characters',
  'Username cannot contain spaces',
  'Cannot start with a number',
  'Cannot contain only numbers',
  'Unknown error'
];
 *
 * Create a list of errors separated by commas in strings
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validateUsername(
	username: string,
	minLength?: number | null,
	maxLength?: number | null,
	errorMsg: (string | null)[] | null = defaultErrorMsg,
): ValidateFunctions {
	if (typeof username !== 'string') throw new TypeError('The input should be a string.');
	// Check para saber se as mensagens que sao passadas sao validas
	// caso contrario retorna um ERRO
	if (errorMsg) {
		if (!Array.isArray(errorMsg)) throw new Error('errorMsg must be an Array or null');
		for (let index: number = 0; index < errorMsg.length; index += 1) {
			if (errorMsg[index] != null && typeof errorMsg[index] !== 'string') {
				throw new TypeError('All values within the array must be strings or null/undefined.');
			}
		}
	}
	const minLenthUsername: number = minLength || 1;
	const maxLenthUsername: number = maxLength || Infinity;

	// Função interna para obter a mensagem de erro
	function getErrorMessage(index: number): string {
		const errorMessage: string | null = errorMsg ? errorMsg[index] : null;
		if (errorMessage === 'username too short' || errorMessage === 'This username is too long') {
			if (maxLenthUsername === Infinity) {
				return `Username must be greater than ${maxLenthUsername} characters`;
			}
			return `Username must be between ${minLenthUsername} and ${maxLenthUsername} characters`;
		}
		return errorMessage != null ? errorMessage : defaultErrorMsg[index];
	}

	if (!username) {
		return {
			isValid: false,
			errorMsg: getErrorMessage(0),
		};
	}

	if (typeof minLenthUsername !== 'number' || typeof maxLenthUsername !== 'number') {
		throw new Error('maxLength or minLength must be a number');
	}
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
				errorMsg: getErrorMessage(3),
			};
		}
		if (regexOnlyNumbers.test(username)) {
			return {
				isValid: false,
				errorMsg: getErrorMessage(5),
			};
		}
		if (regexStartsWithNumber.test(username)) {
			return {
				isValid: false,
				errorMsg: getErrorMessage(4),
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
	} catch (error) {
		return {
			isValid: false,
			errorMsg: getErrorMessage(6),
		};
	}
}
export default validateUsername;
