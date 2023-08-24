import isEmail from './isEmail';

const defaultErrorMsg: string[] = [
  'Invalid value passed',
  'This e-mail is not valid',
  'Email too big, try again',
  'This email is not valid in the country',
  'Email domain is not allowed.',
  'Unknown error',
];
const validDomainsDefault: string[] = ['@gmail.com', '@outlook.com', '@yahoo.com', '@icloud.com', '@hotmail.com',
  '@mail.ru', '@yandex.ru', '@gmx.com', '@zoho.com', '@protonmail.com', '@protonmail.ch'
];

/**
 * @param email
 * @param maxLength optional
 * @param country optional
 * @param errorMsg optional
 * @param validDomains optional
 * @default maxLength number: 400, validDomains = false
 * @example validateEmail('foor@bar.com', 30, 'us);
 * @example validateEmail('foor@bar.com', 30);
 * @example validateEmail('foor@bar.com', 30, null, ['My own error message']); Country is set to null
 * @example validateEmail('joao@myOwnDomain.com', null, null, null, ['@myOwnDomain.com']);
 * @example validateEmail('joaoaoao@gmail.com.com', null, null, null, true);
 * @description This function returns six errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 * ['Invalid value passed', 'This e-mail is not valid', 'Email too big, try again', 'This email is not valid in the country','Email domain is not allowed.', 'Unknown error']
 *
 * Create a list of errors separated by commas in strings
 *
 * @description You can also pass a list of domains that will be allowed, if you leave the parameter empty, it will be set to false and no check will be performed, you can also pass only true and the following list will be used by default:
 *
 * Default:
 * ['@gmail.com', '@outlook.com', '@yahoo.com', '@icloud.com', '@hotmail.com',
  '@mail.ru', '@yandex.ru', '@gmx.com', '@zoho.com', '@protonmail.com', '@protonmail.ch'];

 * You can also create a custom list, your list will completely replace the default list.

	DOCUMENTATION: https://gabriel-logan.github.io/multiform-validator/srcPage/subPages/functions/validateEmail

 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validateEmail(email: string, maxLength?: number|null, country: string|null = '', errorMsg: (string|null)[] = defaultErrorMsg, validDomains: boolean = false): {
	isValid: boolean;
	errorMsg: string | null;
} {
  if (typeof email !== 'string') throw new TypeError('The input should be a string.');

  // Expressão regular para verificar se o e-mail termina com um dos domínios válidos
  let regex: RegExp = /(?:)/; // Inicialização com uma expressão regular vazia
  if (validDomains === true) {
    regex = new RegExp(`${validDomainsDefault.join('|')}$`, 'i');
  } else if (Array.isArray(validDomains) && validDomains.length > 0) {
    const validDomainsCustom = validDomains.map((domain) => domain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    regex = new RegExp(`${validDomainsCustom.join('|')}$`, 'i');
  }

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
		const errorMessage: string|null = errorMsg[index];
		return errorMessage != null ? errorMessage : defaultErrorMsg[index];
  }

  if (!email) {
    return {
      isValid: false,
      errorMsg: getErrorMessage(0),
    };
  }
	const maxEmailLength: number = maxLength || 400;

	if (maxEmailLength < 1 || typeof maxEmailLength !== 'number') throw new Error('maxLength must be a number and cannot be less than 1');

	try {
    // Check domain only if regex is defined (validDomains is true or validDomains is an array)
    if (regex && !regex.test(email)) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(4),
      };
    }
    if (!(isEmail(email))) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(1),
      };
    }
    if (email.length > maxEmailLength) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(2),
      };
    }
    // If country is provided, check if the email ends with the country code
    if (country) {
      if (!email.endsWith(`.${country}`)) {
        return {
          isValid: false,
          errorMsg: getErrorMessage(3),
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
      errorMsg: getErrorMessage(5),
    };
  }
}
export default validateEmail;
