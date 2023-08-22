import re

def isEmail(email: str) -> bool:
    try:
        if type(email) != str:
            raise TypeError('Invalid input, must be a string')
        if not email:
            raise ValueError('Value cannot be null or empty')

        regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if email[0].isdigit():
            return False
        if not re.match(regex, email):
            return False
        depoisDoArroba = email.index('@') + 1
        depoisDoUltimoPonto = email.rfind('.')
        if email[depoisDoArroba].isdigit():
            return False
        if email[depoisDoUltimoPonto].isdigit():
            return False
        return True
    except Exception:
        return False

