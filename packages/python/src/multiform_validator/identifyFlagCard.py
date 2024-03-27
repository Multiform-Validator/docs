import re

def identifyFlagCard(cardNumber):
    if not isinstance(cardNumber, str):
        raise TypeError('The input should be a string.')

    bandeiras = [
        {'name': 'Visa', 'interval': re.compile('^4')},
        {'name': 'Mastercard', 'interval': re.compile('^5[1-5]')},
        {'name': 'American Express', 'interval': re.compile('^3[47]')},
        {'name': 'Discover', 'interval': re.compile('^6(?:011|5)')},
        {'name': 'JCB', 'interval': re.compile('^(?:2131|1800|35\d{3})')},
        {'name': 'Diners Club', 'interval': re.compile('^3(?:0[0-5]|[68])')},
        {'name': 'Maestro', 'interval': re.compile('^(?:5[0678]\d\d|6304|6390|67\d\d)')},
        {'name': 'UnionPay', 'interval': re.compile('^(62|88)')},
        {'name': 'Elo', 'interval': re.compile('^63[789]')},
        {'name': 'Hipercard', 'interval': re.compile('^(3841|60)')},
    ]

    def find_interval(band):
        return band['interval'].search(cardNumber)

    bandeira_encontrada = next((band for band in bandeiras if find_interval(band) is not None), None)

    return bandeira_encontrada['name'] if bandeira_encontrada else 'Unknown'
