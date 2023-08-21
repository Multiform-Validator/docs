/**
 * @param {string} text
 * @param {boolean} [multiple] optional
 * @param {boolean|string[]} [cleanDomain=false]
 * @param {boolean} [repeatEmail=false]
 * @example getOnlyEmail("Entre em contato com a equipe:</br> joao@empresa.com, maria@empresa.com, contato@empresa.com", true);
 * // Output: ["joao@empresa.com", "maria@empresa.com", "contato@empresa.com"]
 *
 * @example getOnlyEmail("Vaga na asdlaod </br> Mande seu email para fiawn@rdwah.com</br>Sim aqui mesmo");
 * // Output: "fiawn@rdwah.com"
 *
 * @example getOnlyEmail("Vaga na asdlaod </br> Mande seu email para fiawn@rdwah.comSim aqui  asdasd@gmail.commesmo", true, true);
 * // Output: [ 'fiawn@rdwah.com', 'asdasd@gmail.com' ]
 *
 * @description This function extracts emails from a given text. If multiple is set to true,
 * it returns an array with all emails found. Otherwise, it returns only the first email found as a string.
 *
 * @description Default domainsList is ['.br', '.io', '.pt', '.us', '.org', '.com', ]; you can set true to use this or pass your own list,
 * OBS: Your list gonna replace the default
 * IMPORTANT: List order matters
 *
 * The third parameter solves the following, if the email is formatted as follows, foo@bar.comAAAA, it will clean the email returning only foo@bar.com, all characters that come after the one in the list will be removed and the email comes out clean
 *
 * if you need to skip some param use null
 *
 * @description the fourth parameter, if true, will allow the list to return repeated emails, otherwise the default does not return repeated emails
 *
 * @returns {string | string[]} An email string if multiple is false, or an array of email strings if multiple is true.
 */
declare function getOnlyEmail(text: string, multiple?: boolean, cleanDomain?: boolean, repeatEmail?: boolean): string | string[];
export default getOnlyEmail;
