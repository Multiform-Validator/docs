/**
 * @param {string} email
 * @example isEmail('foor@bar.com');
 * @returns {boolean}
 */
function isEmail(email) {
  if (!email) return false;
  try {
    const emailString = email.toString(); // apenas por segurança
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (Number(emailString[0])) return false;
    if (!(regex.test(emailString))) return false;
    const depoisDoArroba = emailString.indexOf('@') + 1;
    const depoisDoUltimoPonto = emailString.lastIndexOf('.');
    if (Number(emailString[depoisDoArroba])) return false;
    if (Number(emailString[depoisDoUltimoPonto])) return false;
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = isEmail;
