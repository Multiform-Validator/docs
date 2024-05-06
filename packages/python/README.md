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
