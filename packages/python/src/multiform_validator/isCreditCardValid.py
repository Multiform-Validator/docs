def isCreditCardValid(cardNumber: str) -> bool:
    if not isinstance(cardNumber, str):
        raise TypeError('The input should be a string.')

    # Remove espaços em branco e verifica se todos os caracteres são dígitos
    cardNumber = cardNumber.replace(" ", "")
    if not cardNumber.isdigit():
        return False

    digits = list(map(int, cardNumber))
    tamanhoDoDigito = len(digits)
    totalSum = 0
    isEven = False

    for i in range(tamanhoDoDigito - 1, -1, -1):
        digit = digits[i]
        if isEven:
            digit *= 2
            if digit > 9:
                digit -= 9
        totalSum += digit
        isEven = not isEven

    return totalSum % 10 == 0
