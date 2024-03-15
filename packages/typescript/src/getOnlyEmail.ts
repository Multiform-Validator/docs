
const CleanAfterDefaultDomain: string[] = ['.br', '.io', '.pt', '.us', '.org', '.com'];

/**
 * @example getOnlyEmail("Entre em contato com a equipe:</br> joao@empresa.com, maria@empresa.com, contato@empresa.com", true);
 * // Output: ["joao@empresa.com", "maria@empresa.com", "contato@empresa.com"]
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
 * Follow doc: https://tinyurl.com/getOnlyEmail
 *
 * @returns An email string if multiple is false, or an array of email strings if multiple is true.
 */
function getOnlyEmail(text: string, multiple: boolean = false, cleanDomain: boolean|string[] = false, repeatEmail: boolean = false): string|string[] {

  const emailPattern: RegExp = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

  const matches: string|string[]|null = text.match(emailPattern);

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

		const cleanedEmails: string[] = matches.map((email) => {
			for (const domain of domainsToClean) {
				const index: number = email.lastIndexOf(domain);
				if (index !== -1) {
					email = email.substring(0, index + domain.length);
					break; // Break the loop once a match is found
				}
			}

			for (const domain of domainsToClean) {
				const index: number = email.indexOf(domain);
				if (index !== -1) {
					email = email.substring(0, index + domain.length);
					break; // Break the loop once a match is found
				}
			}

			return email;
		});


    if (!repeatEmail) {
      const uniqueEmails: string[] = [...new Set(cleanedEmails)];
      return multiple ? uniqueEmails : uniqueEmails[0];
    }

    return multiple ? cleanedEmails : cleanedEmails[0];
  }

  if (!repeatEmail) {
    const uniqueEmails: string[] = [...new Set(matches)];
    return multiple ? uniqueEmails : uniqueEmails[0];
  }

  return multiple ? matches : matches[0];
	/**
	 * 		const cleanedEmails: string[] = matches.map((email) => {
      for (const domain of domainsToClean) {
        const index: number = email.lastIndexOf(domain);
        if (index !== -1) {
          return email.substring(0, index + domain.length);
        }
      }
      return email;
    });

		const cleanedEmails2: string[] = cleanedEmails.map((email) => {
      for (const domain of domainsToClean) {
        const index: number = email.indexOf(domain);
        if (index !== -1) {
          return email.substring(0, index + domain.length);
        }
      }
      return email;
		});
	 */
}

export default getOnlyEmail;
