/**
 * @param {string} email
 * @example isEmail('foor@bar.com');
 * @returns {boolean}
 */
function isEmail(email) {
  if (!email) return false;
  const converteParaString = email.toString(); // apenas por segurança
  console.log('Ainda não foi feito');
  console.log('not done yet');
  return converteParaString;
}

module.exports = isEmail;
