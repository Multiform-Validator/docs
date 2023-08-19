/**
 * @param {string} password
 *
 * @description Avalia a força de uma senha e retorna o tipo de força da senha.
 *
 * @returns {string} O tipo de força da senha ('veryWeak', 'weak', 'regular', 'strong' ou 'veryStrong').
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
 *
 *
 * @returns {string} O tipo de força da senha ('veryWeak', 'weak', 'regular', 'strong' ou 'veryStrong').
 */
function passwordStrengthTester(password) {
  if (typeof password !== 'string') throw new TypeError('The input should be a string.');
  // Check de comprimento da senha
  const passwordLength = password.length;
  let strengthType;

  // Critérios para classificar a senha
  if (passwordLength < 6) {
    strengthType = 'veryWeak';
  } else if (passwordLength < 8) {
    strengthType = 'weak';
  } else if (passwordLength < 10) {
    strengthType = 'regular';
  } else if (
    /[A-Z]/.test(password)
    && /[!@#$%^&*(),.?":{}|<>]/.test(password)
    && /\d/.test(password)
    && /[a-zA-Z]/.test(password)
  ) {
    strengthType = 'veryStrong';
  } else {
    strengthType = 'strong';
  }

  return strengthType;
}
module.exports = passwordStrengthTester;
