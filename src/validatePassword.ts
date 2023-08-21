const defaultErrorMsg: string[] = [
  'This password is too long',
  'password too short',
  'Requires at least one capital letter',
  'Requires at least one special character',
  'Requires at least one number',
  'Requires at least one letter',
  'Unknown error',
];

/**
 * @param password
 * @param minLength optional
 * @param maxLength optional
 * @param options optional
 * @param options.requireUppercase optional
 * @param options.requireSpecialChar optional
 * @param options.requireNumber optional
 * @param options.requireString optional
 * @param errorMsg optional
 * @default minLength number: 1
 * @default maxLength number: Infinity
 * @default {requireUppercase}: false
 * @default {requireSpecialChar}: false -> Examples !@#$%^&*(),.?":{}|<>
 * @default {requireNumber}: false
 * @default {requireString}: false
 * @example validatePassword('MyP@ssw0rd', 8, 20, { requireUppercase: true, requireSpecialChar: true, requireNumber: true, requireString: true });
 * @example validatePassword('MyP@ssw0rd', 8, 20, { requireUppercase: true, requireSpecialChar: true, requireNumber: true, requireString: true }, ['My own error msg']);
 * @info minLength cannot be greater than maxLength
 * @description This function returns 7 errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 *   [
  'This password is too long',
  'password too short',
  'Requires at least one capital letter',
  'Requires at least one special character',
  'Requires at least one number',
  'Requires at least one letter',
  'Unknown error',
];

 *
 * Create a list of errors separated by commas in strings
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validatePassword(password: string, minLength?: number|null, maxLength?: number|null, options: {
	requireUppercase: boolean
	requireSpecialChar: boolean
	requireNumber: boolean
	requireString: boolean
} = {
  requireUppercase: false,
  requireSpecialChar: false,
  requireNumber: false,
  requireString: false,
}, errorMsg: (string|null)[] = defaultErrorMsg): {isValid: boolean, errorMsg: string|null} {


  if (typeof password !== 'string') throw new TypeError('The input should be a string.');
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

  const minLenthPassword: number = minLength || 1;
  const maxLenthPassword: number = maxLength || Infinity;

	if (typeof minLenthPassword !== 'number' || typeof maxLenthPassword !== 'number') {
		throw new Error('maxLength and/or minLength must be a number');
	}

  if (minLenthPassword > maxLenthPassword) {
    throw new Error('the minimum size cannot be larger than the maximum');
  } // Verifica se o min é maior que o max

  if (minLenthPassword < 1 || maxLenthPassword < 1) {
    throw new Error('No size can be smaller than 1');
  } // Nenhum dos dois pode ser menor que 1

  try {
    if (password.length > maxLenthPassword) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(0),
      };
    } // Tamanho da palavra não pode ser maior que o tamanho máximo
    if (password.length < minLenthPassword) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(1),
      };
    } // Tamanho n pode ser menor q o min
    if (options != null) {
      // Password validation rules
      if (options.requireUppercase && !/[A-Z]/.test(password)) {
        return {
          isValid: false,
          errorMsg: getErrorMessage(2), // Requer pelo menos uma letra maiuscula
        };
      }
      if (options.requireSpecialChar && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return {
          isValid: false,
          errorMsg: getErrorMessage(3), // Requer pelo menos uma especial caracter
        };
      }
      if (options.requireNumber && !/\d/.test(password)) {
        return {
          isValid: false,
          errorMsg: getErrorMessage(4), // Requer pelo menos um numero
        };
      }
      if (options.requireString && !/[a-zA-Z]/.test(password)) {
        return {
          isValid: false,
          errorMsg: getErrorMessage(5), // Requer pelo menos uma letra
        };
      }
    }
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

export default validatePassword;
