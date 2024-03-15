> [!NOTE]
> I accept help to make the version of the other programming languages.

# Multiform-validator

[![npm version](https://badge.fury.io/js/multiform-validator.svg)](https://badge.fury.io/js/multiform-validator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/multiform-validator.svg?style=flat-square)](https://npm-stat.com/charts.html?package=multiform-validator)

This npm package provides JavaScript functions to validate various forms fields.

Documentation: https://gabriel-logan.github.io/multiform-validator

Feel free to find bugs and report them to me. Your feedback is highly appreciated. Hugs from Gabriel Logan!

If you want to help me, you can buy me a coffee (:

<p align="center">
	<a href="https://www.buymeacoffee.com/gabriellogan" target="_blank">
		<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
	</a>
</p>

## Installation

```bash
npm install multiform-validator
```

or

```bash
yarn add multiform-validator
```

## Data Validator

This package contains various modules for validating different types of data. Below are the available validation modules:

## Available Validation Modules

- **cnpjValidator**: CNPJ validation.
- **cpfValidator**: CPF validation.
- **getOnlyEmail**: Extracts only the email or emails address from a string.
- **identifyFlagCard**: Identifies the flag of a credit card.
- **isAscii**: Checks if the string contains only ASCII characters.
- **isBase64**: Checks if the string is a valid Base64 encoding.
- **isCEP**: CEP validation (Brazilian postal code).
- **isCreditCardValid**: Credit card validation.
- **isDate**: Date format validation.
- **isDecimal**: Checks if the number is a decimal.
- **isEmail**: Email address validation format.
- **isEmpty**: Checks if the string is empty.
- **isMACAddress**: MAC address validation.
- **isMD5**: Checks if the string is a valid MD5 hash.
- **validatePassportNumber**: Passport number validation.
- **isPort**: Port number validation.
- **isPostalCode**: Postal code validation.
- **isTime**: Time format validation.
- **validateBRPhoneNumber**: Brazilian phone number validation.
- **validateEmail**: Email address full validation.
- **validatePassword**: Password validation.
- **validatePhoneNumber**: Phone number validation.
- **validateUsername**: Username validation.
- **validateUSPhoneNumber**: US phone number validation.
- **isNumber**: Checks if the value is a number.
- **passwordStrengthTester**: Password strength test.
- **validateName**: Name validation.
- **validateSurname**: Surname validation.
- **validateTextarea**: Textarea validation.

### You can use it in React Native, Angular, any javascript framework or any javascript or typescript code.
#### Example using Reactjs:

![Example using Reactjs](https://github.com/gabriel-logan/multiform-validator/blob/main/images/exampleWithReactjs.png)
![Showing error in browser](https://github.com/gabriel-logan/multiform-validator/blob/main/images/showErro.png)

### For better information, read the documentation

```javascript

const validator = require('multiform-validator');
// or
import validator from 'multiform-validator';

or

const {FUNCTION_NAME} = require('multiform-validator');
// or
import {FUNCTION_NAME} from 'multiform-validator';

```

```javascript

const validator = require('multiform-validator');
// or
import validator from 'multiform-validator';
// then
validator.FUNCTION_NAME
// OBS: 'if the function is called validate, the return will be an object and not boolean'
// When return object boolean
validator.FUNCTION_NAME = true or false
// When return object
validator.FUNCTION_NAME = object = { isValid: true or false, errorMsg: 'stringError' }
validator.FUNCTION_NAME.isValid = true or false
validator.FUNCTION_NAME.errorMsg = 'ErrorMsg' // You can customize errors
/**
	* There are other returns in some functions, with strings etc, stay tuned
*/
```

Documentation: https://gabriel-logan.github.io/multiform-validator

```javascript

const { validateEmail } = require('multiform-validator');
// or
import { validateEmail } from 'multiform-validator';

// It has many more validations, you can read the documentation or
// do several tests to learn how to use the library in the best possible way.

// Two last parameters are optional
console.log(validateEmail('email@email.com', 30, 'br').isValid); // returns false
console.log(validateEmail('email@email.com.br', 30, 'br').isValid); // returns true
console.log(validateEmail('email@email.com', 30).isValid); // returns true

// All examples return default messages, below is an example setting your own messages

// If you want to use a default parameter, use null.

const validationResult = validateEmail('email@email.com', 30);

if (validationResult.isValid) {
console.log('0 errors');
} else {
console.log(validationResult.errorMsg); // returns the error
}

// or

const validationResult = validateEmail('1email@email.com', 30, null, [null, 'This is an invalid email with my own errors']);

if (validationResult.isValid) {
console.log('0 errors');
} else {
console.log(validationResult.errorMsg); // Return  'This is an invalid email with my own errors'
}

```

Feel free to explore the various functions and experiment with different inputs to understand their behavior. If you encounter any issues or have suggestions, don't hesitate to reach out to me. Your feedback is valuable and helps improve the package. Happy coding!

# By - Gabriel Logan
