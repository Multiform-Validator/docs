def passwordStrengthTester(password):
    if not isinstance(password, str):
        raise TypeError('The input should be a string.')

    password_length = len(password)
    strength_type = 'unknow'

    if password_length <= 5 and password.isdigit():
        strength_type = 'veryWeak'
    elif (password_length <= 5 and password.isalnum()) or \
         (6 <= password_length <= 7 and password.isalnum()) or \
         (password_length < 10 and len(set(password)) <= 2) or \
         (5 <= password_length <= 8 and password.isdigit()):
        strength_type = 'weak'
    elif len(set(password)) == 1 and password_length > 10:
        strength_type = 'regular'
    elif password_length > 16 or \
         (8 <= password_length and any(c.isupper() for c in password) and \
          any(c.islower() for c in password) and \
          any(c.isdigit() for c in password) and \
          any(c.isalnum() and not c.isalnum() for c in password)):
        strength_type = 'veryStrong'
    elif (13 <= password_length <= 16) or \
         (8 <= password_length and any(c.isupper() for c in password) and \
          any(c.islower() for c in password) and \
          any(c.isdigit() for c in password)):
        strength_type = 'strong'
    elif (9 <= password_length <= 12) or \
         (6 <= password_length <= 8 and any(c.isdigit() for c in password) and \
          any(c.isalpha() for c in password)):
        strength_type = 'regular'

    return strength_type
