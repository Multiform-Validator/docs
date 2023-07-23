const isEmail = require('./isEmail');
/**
 * @param {string} email
 * @param {number} maxLength optional
 * @param {string} country optional
 * @default maxLength number: 400
 * @example validateEmail('foor@bar.com', 30, 'us);
 * @example validateEmail('foor@bar.com', 30, 'br);
 * @example validateEmail('foor@bar.com', 30);
 * @returns {boolean}
 */
function validateEmail(email, maxLength, country) {
  if (!email) return false;
  const maxEmailLength = maxLength || 400;
  try {
    const emailString = email.toString(); // apenas por segurança
    if (!(isEmail(emailString))) return false;
    if (emailString.length > maxEmailLength) return false;
    // If country is provided, check if the email ends with the country code
    if (country) {
      if (!emailString.endsWith(`.${country}`)) {
        return false;
      }
    }
    return true;
  } catch (error) {
    return false;
  }
}
module.exports = validateEmail;
