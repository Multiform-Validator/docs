/**
 * @param {string} text
 * @param {boolean} [multiple] optional
 * @example getOnlyEmail("Entre em contato com a equipe:</br> joao@empresa.com, maria@empresa.com, contato@empresa.com", true);
 * // Output: ["joao@empresa.com", "maria@empresa.com", "contato@empresa.com"]
 *
 * @example getOnlyEmail("Vaga na asdlaod </br> Mande seu email para fiawn@rdwah.com</br>Sim aqui mesmo");
 * // Output: "fiawn@rdwah.com"
 *
 * @description This function extracts emails from a given text. If multiple is set to true,
 * it returns an array with all emails found. Otherwise, it returns only the first email found as a string.
 *
 * @returns {string | string[]} An email string if multiple is false, or an array of email strings if multiple is true.
 */
function getOnlyEmail(text, multiple = false) {
  const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
  const matches = text.match(emailPattern);
  if (!matches) return 'No email found';
  return multiple ? matches : matches[0];
}
module.exports = getOnlyEmail;
