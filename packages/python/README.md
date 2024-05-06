# Multiform-validator

[![PyPI version](https://badge.fury.io/py/multiform-validator.svg)](https://badge.fury.io/py/multiform-validator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PyPI downloads](https://img.shields.io/pypi/dm/multiform-validator.svg?style=flat-square)](https://pypistats.org/packages/multiform-validator)

This package provides Python functions to validate various forms fields.

Documentation: https://github.com/gabriel-logan/multiform-validator

Feel free to find bugs and report them to me. Your feedback is highly appreciated. Hugs from Gabriel Logan!

If you want to help me, you can buy me a coffee (:

<p align="center">
	<a href="https://www.buymeacoffee.com/gabriellogan" target="_blank">
		<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 50px !important;width: 180px !important;" >
	</a>
</p>

### Installation

```bash
pip install multiform-validator
```

# Data Validator

This package contains various modules for validating different types of data. Below are the available validation modules:

# Avaliable for while

- **cnpjValidator**: CNPJ validation.
- **cpfValidator**: CPF validation.
- **getOnlyEmail**: Extracts only the email or emails address from a string.
- **identifyFlagCard**: Identifies the flag of a credit card.
- **isCreditCardValid**: Credit card validation.
- **isEmail**: Email address validation format.
- **passwordStrengthTester**: Password strength test.
- **validateBRPhoneNumber**: Brazilian phone number validation.

## Usage

Here is an example of how to use the functions in this package:

```python
from multiform_validator import (
    cnpjIsValid,
    cpfIsValid,
    getOnlyEmail,
    identifyFlagCard,
    isCreditCardValid,
    isEmail,
    passwordStrengthTester,
    validateBRPhoneNumber
)
```

```python

print("Is email", isEmail("foo@bar.com")) # True
print("Get only email", getOnlyEmail("awdawd wadawd wda awd jhony@gmail.com awdawdawd")) # jhony@gmail.com
print("Password strength", passwordStrengthTester("aA1!asd@qd2asd")) # Strong
print("Is CPF valid", cpfIsValid("123.456.789-02")['isValid']) # False
print("Is CNPJ valid", cnpjIsValid("12.345.678/0001-09")) # { 'isValid': False, 'errorMsg': 'CNPJ is not valid' }
print("Is credit card valid", isCreditCardValid("5117 2161 1334 8362")) # True
print("Identify flag card", identifyFlagCard("5117 2161 1334 8362")) # Mastercard
print("Validate BR phone number", validateBRPhoneNumber("(11) 91234-5678")) # { 'isValid': True, 'errorMsg': None }

```

## Functions signature

All params with default values are optional.

```python

def isEmail(email: str) -> bool:
    pass

def getOnlyEmail(text: str, multiple=False, clean_domain=False, repeat_email=False) -> str:
    pass

def passwordStrengthTester(password: str) -> str:
    pass

defaultErrorMsgCPF = [
  'CPF invalid',
  'CPF must have 11 numerical digits',
  'CPF is not valid',
  'Unknown error',
]
def cpfIsValid(cpf: str, errorMsg=defaultErrorMsgCPF) -> Dict[str, Union[bool, str, None]]:
    pass

default_error_msgCNPJ = [
   'CNPJ invalid', 
   'CNPJ must have 14 numerical digits', 
   'CNPJ is not valid', 
   'Unknown error'
]
def cnpjIsValid(cnpj: str, errorMsg=default_error_msgCNPJ) -> Dict[str, Union[bool, str, None]]:
    pass

def isCreditCardValid(cardNumber: str) -> bool:
    pass

def identifyFlagCard(cardNumber: str) -> str:
    pass

default_error_msg = ['Invalid value passed', 'Invalid phone number', 'Unknown error']
def validateBRPhoneNumber(phoneNumber: str, errorMsg=default_error_msg) -> Dict[str, Union[bool, str, None]]:
    pass

```

## Looking for contributions. 

## Available Validation Modules !!! STILL NOT AVALIABLE !!!

- **isAscii**: Checks if the string contains only ASCII characters.
- **isBase64**: Checks if the string is a valid Base64 encoding.
- **isCEP**: CEP validation (Brazilian postal code).
- **isDate**: Date format validation.
- **isDecimal**: Checks if the number is a decimal.
- **isEmpty**: Checks if the string is empty.
- **isMACAddress**: MAC address validation.
- **isMD5**: Checks if the string is a valid MD5 hash.
- **validatePassportNumber**: Passport number validation.
- **isPort**: Port number validation.
- **isPostalCode**: Postal code validation.
- **isTime**: Time format validation.
- **validateEmail**: Email address full validation.
- **validatePassword**: Password validation.
- **validatePhoneNumber**: Phone number validation.
- **validateUsername**: Username validation.
- **validateUSPhoneNumber**: US phone number validation.
- **isNumber**: Checks if the value is a number.
- **validateName**: Name validation.
- **validateSurname**: Surname validation.
- **validateTextarea**: Textarea validation.

### For better information, read the documentation

Feel free to explore the various functions and experiment with different inputs to understand their behavior. If you encounter any issues or have suggestions, don't hesitate to reach out to me. Your feedback is valuable and helps improve the package. Happy coding!

# By - Gabriel Logan
