import re

def isEmail(email):
    if not isinstance(email, str):
        raise TypeError("Invalid input, must be a string")

    if not email:
        raise ValueError("Value cannot be null or empty")

    regex = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"

    if email[0].isdigit():
        return False

    if not re.match(regex, email):
        return False

    before_at = email.index("@")
    after_at = email.index("@") + 1
    after_last_dot = email.rindex(".")

    if email[after_at].isdigit():
        return False

    if email[after_last_dot].isdigit():
        return False

    if ".." in email[:before_at]:
        return False

    if email[:before_at].endswith("."):
        return False

    parts = email.split(".")
    if len(parts) > 2 and parts[-2] == parts[-3]:
        return False

    # Check if there is more than one @
    if email.count("@") > 1:
        return False

    # Check if there is more than one consecutive dot after @
    if ".." in email[after_at:]:
        return False

    # Check if the domain is repeating
    domain_parts = email.split("@")[1].split(".")
    unique_domain_parts = list(set(domain_parts))
    if len(domain_parts) != len(unique_domain_parts):
        return False

    return True