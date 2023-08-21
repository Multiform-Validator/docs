/**
 * @description Avalia a força de uma senha e retorna o tipo de força da senha.
 *
 * @returns O tipo de força da senha ('veryWeak', 'weak', 'regular', 'strong' ou 'veryStrong').
 *
 * @example
 * passwordStrengthTester('123'); // Output: 'veryWeak'
 *
 * @example
 * passwordStrengthTester('abc'); // Output: 'weak'
 *
 * @example
 * passwordStrengthTester('abc123'); // Output: 'regular'
 *
 * @example
 * passwordStrengthTester('Abc123!'); // Output: 'strong'
 *
 * @example
 * passwordStrengthTester('SuperSecurePassword123!'); // Output: 'veryStrong'
 */
declare function passwordStrengthTester(password: string): string;
export default passwordStrengthTester;
