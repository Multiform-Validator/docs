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
declare function passwordStrengthTester(password: string): string;
export default passwordStrengthTester;
