const CleanAfterDefaultDomain = ['.br', '.io', '.pt', '.us', '.org', '.com'];
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
function getOnlyEmail(text: string, multiple = false, cleanDomain = false, repeatEmail = false) {
  const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
  const matches = text.match(emailPattern);

  if (!matches) return 'No email found';

  if (cleanDomain) {
		let domainsToClean: string[]; // Certifica-se de que domainsToClean seja sempre um array de strings

		if (Array.isArray(cleanDomain)) {
			domainsToClean = cleanDomain;
		} else if (cleanDomain === true) {
			domainsToClean = CleanAfterDefaultDomain;
		} else {
			domainsToClean = []; // Define como um array vazio se cleanDomain for false ou não for especificado
		}

    const cleanedEmails = matches.map((email) => {
      for (const domain of domainsToClean) {
        const index = email.lastIndexOf(domain);
        if (index !== -1) {
          return email.substring(0, index + domain.length);
        }
      }
      return email;
    });

    if (!repeatEmail) {
      const uniqueEmails = [...new Set(cleanedEmails)];
      return multiple ? uniqueEmails : uniqueEmails[0];
    }

    return multiple ? cleanedEmails : cleanedEmails[0];
  }

  if (!repeatEmail) {
    const uniqueEmails = [...new Set(matches)];
    return multiple ? uniqueEmails : uniqueEmails[0];
  }

  return multiple ? matches : matches[0];
}

export = getOnlyEmail;
