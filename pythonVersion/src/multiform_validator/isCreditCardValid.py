def isCreditCardValid(cardNumber: str):
    if not isinstance(cardNumber, str):
        raise TypeError('The input should be a string.')

    digits = list(map(int, filter(str.isdigit, cardNumber)))
    tamanho_do_digito = len(digits)
    sum_value = 0
    is_even = False

    for i in range(tamanho_do_digito - 1, -1, -1):
        digit = digits[i]
        if is_even:
            digit *= 2
            if digit > 9:
                digit -= 9
        sum_value += digit
        is_even = not is_even

    return sum_value % 10 == 0
