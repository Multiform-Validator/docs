/**
 * @description Avalia a força de uma senha e retorna o tipo de força da senha.
 *
 * @returns O tipo de força da senha ('veryWeak', 'weak', 'regular', 'strong' ou 'veryStrong').
 *
 * @example
 * passwordStrengthTester('12345'); // Output: 'veryWeak'
 *
 * @example
 * passwordStrengthTester('abcdef'); // Output: 'weak'
 *
 * @example
 * passwordStrengthTester('abc12345'); // Output: 'regular'
 *
 * @example
 * passwordStrengthTester('Abc123awdasd'); // Output: 'strong'
 *
 * @example
 * passwordStrengthTester('SuperSecurePassword123!@'); // Output: 'veryStrong'
 */
function passwordStrengthTester(password: string): string {
  if (typeof password !== 'string') throw new TypeError('The input should be a string.');

  const passwordLength: number = password.length;
  let strengthType: string = 'unknow';
	switch (true) {
		case passwordLength <= 5 && /^\d+$/.test(password):
			strengthType = 'veryWeak';
			break;

		case (passwordLength <= 5 && /^[a-zA-Z0-9]+$/.test(password)) || (passwordLength >= 6 && /^[a-zA-Z0-9]+$/.test(password) && passwordLength <= 7) || (passwordLength < 10 && /(.)\1{3,}/.test(password)) || (passwordLength >= 5 && passwordLength <= 8 && /^\d+$/.test(password)):
			strengthType = 'weak';
			break;

		case /(.)\1{5,}/.test(password) && passwordLength > 10:
			strengthType = 'regular';
			break;

		case (passwordLength > 16) || (
			password.length >= 8 &&
			/[A-Z]/.test(password) &&
			/[a-z]/.test(password) &&
			/[0-9]/.test(password) &&
			/[\W_]/.test(password)
		):
			strengthType = 'veryStrong';
			break;

		case (passwordLength >= 13 && passwordLength <= 16) || (
			password.length >= 8 &&
			/[A-Z]/.test(password) &&
			/[a-z]/.test(password) &&
			/[0-9]/.test(password)
		):
			strengthType = 'strong';
			break;

		case (passwordLength >= 9 && passwordLength <= 12) || (password.length >= 6 && password.length <= 8 && /[0-9]/.test(password) && /[a-zA-Z]/.test(password)):
			strengthType = 'regular';
			break;

		default:
			break;
	}
	return strengthType;
}

export default passwordStrengthTester;
