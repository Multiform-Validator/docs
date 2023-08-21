const defaultErrorMsg: string[] = [
  'This textarea is too big',
  'Can not be empty',
  'Unknown error',
];
/**
 * @default isRequired boolean: default: false
 * @default maxLength number: default: 50
 * @description This function returns 2 errors in the following order,
 *
 * default:
 * [
  'This textarea is too big',
  'Can not be empty',
  'Unknown error',
];
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validateTextarea(textarea: string, isRequired: boolean = false, maxLength?: number|null,
	errorMsg: (string|null)[] = defaultErrorMsg): {
	isValid: boolean, errorMsg: string|null
} {
  if (typeof textarea !== 'string') throw new TypeError('The input should be a string.');
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

  // Função interna para obter a mensagem de erro
  function getErrorMessage(index: number): string {
    if (errorMsg && index >= 0 && index < errorMsg.length) {
      const errorMessage: string|null = errorMsg[index];
      return errorMessage != null ? errorMessage : defaultErrorMsg[index];
    }
    return defaultErrorMsg[index];
  }

	const maxTextAreaLength: number = maxLength || 50;

	if (maxTextAreaLength < 1 || typeof maxTextAreaLength !== 'number') {
		throw new Error('maxLength or minLength must be a number and cannot be less than 1');
	}
  if (isRequired === true) {
    if (textarea === '') {
      return {
        isValid: false,
        errorMsg: getErrorMessage(1),
      };
    }
  }
  try {
    if (textarea.length > maxTextAreaLength) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(0),
      };
    }
    return {
      isValid: true,
      errorMsg: null,
    };
  } catch (error) {
    return {
      isValid: false,
      errorMsg: getErrorMessage(2),
    };
  }
}
export default validateTextarea;
