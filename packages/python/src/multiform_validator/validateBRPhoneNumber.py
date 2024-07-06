import re

default_error_msg = ['Invalid value passed', 'Invalid phone number', 'Unknown error']

def validateBRPhoneNumber(phone_number, errorMsg=default_error_msg):
    if not isinstance(phone_number, str):
        raise TypeError('The input should be a string.')

    if errorMsg:
        if not isinstance(errorMsg, list):
            raise TypeError('errorMsg must be a list')
        for msg in errorMsg:
            if msg is not None and not isinstance(msg, str):
                raise TypeError('All values within the list must be strings or None.')

    def get_error_message(index):
        error_message = errorMsg[index]
        return error_message if error_message is not None else default_error_msg[index]

    if not phone_number:
        return {
            'isValid': False,
            'errorMsg': get_error_message(0),
        }

    br_phone_number_regex = r'^\(?\d{2}\)?[\s-]?9?\d{4}-?\d{4}$'
    if not re.match(br_phone_number_regex, phone_number):
        return {
            'isValid': False,
            'errorMsg': get_error_message(1),
        }

    return {
        'isValid': True,
        'errorMsg': None,
    }
