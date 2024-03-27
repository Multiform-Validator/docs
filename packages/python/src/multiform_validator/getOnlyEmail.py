import re

CleanAfterDefaultDomain = ['.br', '.io', '.pt', '.us', '.org', '.com']

def getOnlyEmail(text, multiple=False, clean_domain=False, repeat_email=False):
    """
		Example:
		getOnlyEmail("Entre em contato com a equipe:</br> joao@empresa.com, maria@empresa.com, contato@empresa.com", True)
		# Output: ["joao@empresa.com", "maria@empresa.com", "contato@empresa.com"]

		Description: This function extracts emails from a given text. If multiple is set to True,
		it returns an array with all emails found. Otherwise, it returns only the first email found as a string.

		Default domains_list is ['.br', '.io', '.pt', '.us', '.org', '.com']; you can set it to True to use this or pass your own list.
		Note: Your list will replace the default. Important: List order matters.

		The third parameter handles the following: if the email is formatted as follows, foo@bar.comAAAA,
		it will clean the email, returning only foo@bar.com. All characters that come after the ones in the list will be removed,
		resulting in a clean email.

		If you need to skip some parameters, use None.

		The fourth parameter, if True, will allow the list to return repeated emails.
		Otherwise, the default behavior is not to return repeated emails.

		Follow documentation: https://tinyurl.com/getOnlyEmail

		Returns an email string if multiple is False, or an array of email strings if multiple is True.
		"""
    email_pattern = r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}'
    matches = re.findall(email_pattern, text)

    if not matches:
        return 'No email found'

    if clean_domain:
        domains_to_clean = []

        if isinstance(clean_domain, list):
            domains_to_clean = clean_domain
        elif clean_domain is True:
            domains_to_clean = CleanAfterDefaultDomain

        cleaned_emails = []
        for email in matches:
            for domain in domains_to_clean:
                index = email.rfind(domain)
                if index != -1:
                    email = email[:index + len(domain)]
                    break

            for domain in domains_to_clean:
                index = email.find(domain)
                if index != -1:
                    email = email[:index + len(domain)]
                    break

            cleaned_emails.append(email)

        if not repeat_email:
            unique_emails = list(set(cleaned_emails))
            return unique_emails if multiple else unique_emails[0]

        return cleaned_emails if multiple else cleaned_emails[0]

    if not repeat_email:
        unique_emails = list(set(matches))
        return unique_emails if multiple else unique_emails[0]

    return matches if multiple else matches[0]
