/**
 * @param {string} username
 * @param {number} minLength optional
 * @param {number} maxLength optional
 * @default minLength number: 1
 * @default maxLength number: Infinity
 * @example validateUsername('User999', 8, 20);
 * @info minLength cannot be greater than maxLength
 * @returns {boolean}
 */
function validateUsername(username, minLength, maxLength) {
  if (!username) return false;
  const minLenthUsername = parseInt(minLength, 10) || 1;
  const maxLenthUsername = parseInt(maxLength, 10) || Infinity;
  try {
    const usernameString = username.toString();
    if (minLenthUsername > maxLenthUsername) return false; // Verifica se o min é maior que o max
    if (minLenthUsername < 1 || maxLenthUsername < 1) return false; // Nenhum dos dois pode ser menor que 1
    if (usernameString.length < minLenthUsername) return false; // Tamanho n pode ser menor q o min
    if (usernameString.length > maxLenthUsername) return false; // Tamanho da palavra não pode ser maior que o tamanho máximo
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = validateUsername;
