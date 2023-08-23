import re

clean_after_default_domain = ['.br', '.io', '.pt', '.us', '.org', '.com']

def getOnlyEmail(text, multiple=False, clean_domain=False, repeat_email=False):
    email_pattern = r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}'
    matches = re.findall(email_pattern, text)

    if not matches:
        return 'No email found'

    if clean_domain:
        domains_to_clean = []
        if isinstance(clean_domain, list):
            domains_to_clean = clean_domain
        elif clean_domain is True:
            domains_to_clean = clean_after_default_domain

        cleaned_emails = []
        cleaned_emails2 = []
        for email in matches:
            for domain in domains_to_clean:
                index = email.rfind(domain)
                if index != -1:
                    cleaned_emails.append(email[:index + len(domain)])
                index = email.find(domain)
                if index != -1:
                    cleaned_emails2.append(email[:index + len(domain)])

        if not repeat_email:
            unique_emails = list(set(cleaned_emails2))
            return unique_emails if multiple else unique_emails[0]

        return cleaned_emails2 if multiple else cleaned_emails2[0]

    if not repeat_email:
        unique_emails = list(set(matches))
        return unique_emails if multiple else unique_emails[0]

    return matches if multiple else matches[0]
