# Define the default error messages
defaultErrorMsg = [
    "CPF invalid",
    "CPF must have 11 numerical digits",
    "CPF is not valid",
    "Unknown error",
]

def cpfValidator(cpf, errorMsg=None):
    """
    Validates a Brazilian CPF number for correctness.

    The CPF (Cadastro de Pessoas Físicas) is a Brazilian tax identification number.
    It consists of 11 digits in the format XXX.XXX.XXX-XX. This function checks the
    validity of a CPF number using its calculation algorithm.

    :param cpf: The CPF number as a string.
    :param errorMsg: An optional list of custom error messages.
    :return: A dictionary with 'isValid' (boolean) and 'errorMsg' (string) properties.
    """
    if errorMsg is None:
        errorMsg = defaultErrorMsg
    else:
        if not isinstance(errorMsg, list):
            raise TypeError("Must be a list")
        for index, msg in enumerate(errorMsg):
            if msg is not None and not isinstance(msg, str):
                raise TypeError("All values within the list must be strings or None.")

    def get_error_message(index):
        return errorMsg[index] if index < len(errorMsg) and errorMsg[index] is not None else defaultErrorMsg[index]

    try:
        if not cpf:
            return {
                'isValid': False,
                'errorMsg': get_error_message(0),
            }

        cpf_clean = ''.join(filter(str.isdigit, cpf))

        if len(cpf_clean) != 11 or cpf_clean == cpf_clean[0] * 11:
            return {
                'isValid': False,
                'errorMsg': get_error_message(1 if len(cpf_clean) != 11 else 2),
            }

        def calculate_digit(cpf_slice):
            return sum((10 - i) * int(digit) for i, digit in enumerate(cpf_slice)) % 11 % 10

        if all(cpf_clean[i] == str(calculate_digit(cpf_clean[:i])) for i in [9, 10]):
            return {
                'isValid': True,
                'errorMsg': None,
            }
        return {
            'isValid': False,
            'errorMsg': get_error_message(2),
        }
    except Exception as e:
        return {
            'isValid': False,
            'errorMsg': get_error_message(3),
        }