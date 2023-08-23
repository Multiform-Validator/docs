def identifyFlagCard(cardNumber: str):
    if not isinstance(cardNumber, str):
        raise TypeError('The input should be a string.')

    bandeiras = [
        {'name': 'Visa', 'interval': '^4'},
        {'name': 'Mastercard', 'interval': '^5[1-5]'},
        {'name': 'American Express', 'interval': '^3[47]'},
        {'name': 'Discover', 'interval': '^6(?:011|5)'},
        {'name': 'JCB', 'interval': '^(?:2131|1800|35\d{3})'},
        {'name': 'Diners Club', 'interval': '^3(?:0[0-5]|[68])'},
        {'name': 'Maestro', 'interval': '^(?:5[0678]\d\d|6304|6390|67\d\d)'},
        {'name': 'UnionPay', 'interval': '^(62|88)'},
        {'name': 'Elo', 'interval': '^63[789]'},
        {'name': 'Hipercard', 'interval': '^(3841|60)'},
    ]

    def find_interval(band):
        return band['interval'].search(cardNumber)

    bandeira_encontrada = next((band for band in bandeiras if find_interval(band) is not None), None)

    return bandeira_encontrada['name'] if bandeira_encontrada else 'Unknown'
