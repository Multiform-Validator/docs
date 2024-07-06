# Define the default error messages
default_error_msg = [
    "CPF invalid",
    "CPF must have 11 numerical digits",
    "CPF is not valid",
    "Unknown error",
]

def cpfValidator(cpf, error_msg=None):
    """
    Validates a Brazilian CPF number for correctness.

    The CPF (Cadastro de Pessoas Físicas) is a Brazilian tax identification number.
    It consists of 11 digits in the format XXX.XXX.XXX-XX. This function checks the
    validity of a CPF number using its calculation algorithm.

    :param cpf: The CPF number as a string.
    :param error_msg: An optional list of custom error messages.
    :return: A dictionary with 'is_valid' (boolean) and 'error_msg' (string) properties.
    """
    if error_msg is None:
        error_msg = default_error_msg
    else:
        if not isinstance(error_msg, list):
            raise TypeError("Must be a list")
        for index, msg in enumerate(error_msg):
            if msg is not None and not isinstance(msg, str):
                raise TypeError("All values within the list must be strings or None.")

    def get_error_message(index):
        return error_msg[index] if index < len(error_msg) and error_msg[index] is not None else default_error_msg[index]

    try:
        if not cpf:
            return {
                'is_valid': False,
                'error_msg': get_error_message(0),
            }

        cpf_clean = ''.join(filter(str.isdigit, cpf))

        if len(cpf_clean) != 11 or cpf_clean == cpf_clean[0] * 11:
            return {
                'is_valid': False,
                'error_msg': get_error_message(1 if len(cpf_clean) != 11 else 2),
            }

        def calculate_digit(cpf_slice):
            return sum((10 - i) * int(digit) for i, digit in enumerate(cpf_slice)) % 11 % 10

        if all(cpf_clean[i] == str(calculate_digit(cpf_clean[:i])) for i in [9, 10]):
            return {
                'is_valid': True,
                'error_msg': None,
            }
        return {
            'is_valid': False,
            'error_msg': get_error_message(2),
        }
    except Exception as e:
        return {
            'is_valid': False,
            'error_msg': get_error_message(3),
        }