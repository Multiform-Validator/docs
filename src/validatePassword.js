/**
 * @param {string} password
 * @param {number} minLength optional
 * @param {number} maxLength optional
 * @param {object} options optional
 * @param {boolean} options.requireUppercase optional
 * @param {boolean} options.requireSpecialChar optional
 * @param {boolean} options.requireNumber optional
 * @param {boolean} options.requireString optional
 * @default minLength number: 1
 * @default maxLength number: Infinity
 * @default options.requireUppercase: false
 * @default options.requireSpecialChar: false -> Examples !@#$%^&*(),.?":{}|<>
 * @default options.requireNumber: false
 * @default options.requireString: false
 * @example validatePassword('MyP@ssw0rd', 8, 20, { requireUppercase: true, requireSpecialChar: true, requireNumber: true, requireString: true });
 * @info minLength cannot be greater than maxLength
 * @returns {boolean}
 */
function validatePassword(password, minLength, maxLength, {
  requireUppercase = false,
  requireSpecialChar = false,
  requireNumber = false,
  requireString = false,
} = {}) {
  if (!password) return false;
  const minLenthPassword = parseInt(minLength, 10) || 1;
  const maxLenthPassword = parseInt(maxLength, 10) || Infinity;
  try {
    const passwordString = password.toString();
    if (minLenthPassword > maxLenthPassword) return false; // Verifica se o min é maior que o max
    if (minLenthPassword < 1 || maxLenthPassword < 1) return false; // Nenhum dos dois pode ser menor que 1
    if (passwordString.length > maxLenthPassword) return false; // Tamanho da palavra não pode ser maior que o tamanho máximo
    if (passwordString.length < minLenthPassword) return false; // Tamanho n pode ser menor q o min
    // Password validation rules
    if (requireUppercase && !/[A-Z]/.test(passwordString)) return false;
    if (requireSpecialChar && !/[!@#$%^&*(),.?":{}|<>]/.test(passwordString)) return false;
    if (requireNumber && !/\d/.test(passwordString)) return false;
    if (requireString && !/[a-zA-Z]/.test(passwordString)) return false;
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = validatePassword;
