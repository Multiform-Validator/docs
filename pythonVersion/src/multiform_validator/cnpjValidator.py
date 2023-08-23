def calculate_first_verifier(cnpj_base):
    weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    total_sum = 0
    for i in range(12):
        total_sum += cnpj_base[i] * weight[i]
    remainder = total_sum % 11
    return 0 if remainder < 2 else 11 - remainder

def calculate_second_verifier(cnpj_base, first_verifier):
    weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    total_sum = 0
    for i in range(12):
        total_sum += cnpj_base[i] * weight[i]
    total_sum += first_verifier * weight[12]
    remainder = total_sum % 11
    return 0 if remainder < 2 else 11 - remainder

default_error_msg = ['CNPJ invalid', 'CNPJ must have 14 numerical digits', 'CNPJ is not valid', 'Unknown error']

def cnpjValidator(cnpj: str, errorMsg: list[str, str or None]=default_error_msg) -> object[bool, str or None]:
    if not isinstance(cnpj, str):
        raise TypeError('The input should be a string.')

    if errorMsg:
        if not isinstance(errorMsg, list):
            raise ValueError('Must be a list')
        for msg in errorMsg:
            if msg is not None and not isinstance(msg, str):
                raise TypeError('All values within the list must be strings or None/NoneType.')

    def get_error_message(index):
            error_message = errorMsg[index]
            return error_message if error_message is not None else default_error_msg[index]

    try:
        if not cnpj:
            return {
                'isValid': False,
                'errorMsg': get_error_message(0),  # 'CNPJ invalid'
            }

        cnpj_clean = ''.join(filter(str.isdigit, cnpj))
        cnpj_array = list(map(int, cnpj_clean))
        first_verifier = calculate_first_verifier(cnpj_array[:12])
        second_verifier = calculate_second_verifier(cnpj_array[:12] + [first_verifier], first_verifier)

        if cnpj_array[12] == first_verifier and cnpj_array[13] == second_verifier:
            return {
                'isValid': True,
                'errorMsg': None,
            }

        return {
            'isValid': False,
            'errorMsg': get_error_message(2),  # 'CNPJ is not valid'
        }
    except Exception as error:
        return {
            'isValid': False,
            'errorMsg': get_error_message(3),  # 'Unknown error'
        }

