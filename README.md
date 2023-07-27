# Multiform-validator

[![npm version](https://badge.fury.io/js/multiform-validator.svg?refresh=18)](https://badge.fury.io/js/multiform-validator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/multiform-validator.svg?style=flat-square)](https://npm-stat.com/charts.html?package=multiform-validator)

This npm package provides JavaScript functions to validate various forms fields.

If you want to help me, you can buy me a coffee (:

<p align="center">
	<a href="https://www.buymeacoffee.com/gabriellogan" target="_blank">
		<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
	</a>
</p>

An HTML page will be created on GitHub where more detailed information can be found. For now, you can read the parameter comments when you hover over the functions, at least in Visual Studio Code.

Website: https://gabriel-logan.github.io/multiform-validator

Feel free to find bugs and report them to me. Your feedback is highly appreciated. Hugs from Gabriel Logan!

### Installation

```bash
npm install multiform-validator
```

# Data Validator

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
- **isEmail**: Email address validation.
- **isEmpty**: Checks if the string is empty.
- **isMACAddress**: MAC address validation.
- **isMD5**: Checks if the string is a valid MD5 hash.
- **validatePassportNumber**: Passport number validation.
- **isPort**: Port number validation.
- **isPostalCode**: Postal code validation.
- **isTime**: Time format validation.
- **validateBRPhoneNumber**: Brazilian phone number validation.
- **validateEmail**: Email address validation.
- **validatePassword**: Password validation.
- **validatePhoneNumber**: Phone number validation.
- **validateUsername**: Username validation.
- **validateUSPhoneNumber**: US phone number validation.
- **isNumber**: Checks if the value is a number.
- **passwordStrengthTester**: Password strength test.
- **validateName**: Name validation.
- **validateSurname**: Surname validation.

if you prefer, you can use importing as:
```javascript
	const validator = require('multiform-validator');
	or
	import validator from 'multiform-validator';
	then

	validator.FUNCTION_NAME
	#OBS: 'if the function is called validate, the return will be an object and not boolean'

	When return object boolean
	validation.FUNCTION_NAME = true or false

	When return object
	validation.FUNCTION_NAME = object = {isValid: true or false, errorMsg: 'stringError'}
	validation.FUNCTION_NAME.isValid = true or false
	validation.FUNCTION_NAME.errorMsg = 'ErrorMsg' // You can customize errors

	/**
	 * There are other returns in some functions, with strings etc, stay tuned
	*/
```

validateEmail example:

```javascript
/**
 * ALWAYS CHECK WHICH FUNCTION RETURNS, functions named validate always return objects with isValid and errorMsg
*/

const {validateEmail} = require('multiform-validator');
or
import {validateEmail} from 'multiform-validator';

// Two last parameters are optional
console.log(validateEmail('email@email.com', 30, 'br').isValid) return false
console.log(validateEmail('email@email.com.br', 30, 'br').isValid) return true
console.log(validateEmail('email@email.com', 30).isValid) return true

// All examples return default messages, below is an example setting your own messages

// If you want to use a default parameter, use null.

const validationResult = validateEmail('email@email.com', 30);

if (validationResult.isValid) {
  console.log('0 errors');
} else {
  console.log(validationResult.errorMsg); // returns the error
}

or

const validationResult = validateEmail('1email@email.com', 30, null, [null, 'This is an invalid email with my own errors']);

if (validationResult.isValid) {
  console.log('0 erros');
} else {
  console.log(validationResult.errorMsg); // Return  'This is an invalid email with my own errors'
}
```

how to use:

You can combine all parameters using with or if you want to skip some, use null, then use the next param


```javascript
const {cpfIsValid, cnpjIsValid} = require('multiform-validator');
console.log(cpfIsValid('CPFNUMBER').isValid); return true or false
console.log(cnpjIsValid('CNPJNUMBER').isValid); return true or false

or

import {cpfIsValid, cnpjIsValid} from 'multiform-validator';
console.log(cpfIsValid('CPFNUMBER').isValid); return true or false
console.log(cnpjIsValid('CNPJNUMBER').isValid); return true or false
```

## Password Examples:

```javascript

const {validatePassword} = require("multiform-validator");
or
import {validatePassword} from "multiform-validator";

const validationResult = validatePassword('minhasenha', 5,15);

if (validationResult.isValid) {
  console.log('0 errors');
} else {
  console.log(validationResult.errorMsg); // returns the error
}

// other

const validationResult = validatePassword('asom', 5,15, null, [null, 'my ownMensage']);

if (validationResult.isValid) {
  console.log('0 errors');
} else {
  console.log(validationResult.errorMsg); // returns the error
}
// other

const validationResult = validatePassword('minhasenha', 5,15, {
  requireUppercase: true
});

if (validationResult.isValid) {
  console.log('0 errors');
} else {
  console.log(validationResult.errorMsg); // returns the error Requires at least one capital letter
}
// other

const validationResult = validatePassword('minhasenha', 5,15, null, ['My own errors msgs']);

if (validationResult.isValid) {
  console.log('0 errors');
} else {
  console.log(validationResult.errorMsg); // returns the error
}

```


## Additional Examples:
Here are some additional examples demonstrating the usage of the validation

functions in the package:

```javascript
// Example: Validating a Brazilian phone number
const { validateBRPhoneNumber } = require('multiform-validator');

const phoneNumber = '+55 11 987654321';
const validationResult = validateBRPhoneNumber(phoneNumber);

if (validationResult.isValid) {
  console.log('Valid Brazilian phone number.');
} else {
  console.log(validationResult.errorMsg);
}

// Example: Validating a date
const { isDate } = require('multiform-validator');

const dateStr = '2023-07-24';
const validationResult = isDate(dateStr);

if (validationResult) {
  console.log('Valid date.');
} else {
  console.log('Invalid date format.');
}

// Example: Validating a CEP (Brazilian ZIP code)
const { isCEP } = require('multiform-validator');

const cep = '12345-678';
const validationResult = isCEP(cep);

if (validationResult) {
  console.log('Valid CEP.');
} else {
  console.log('Invalid CEP format.');
}

// Example: Validating a credit card number
const { isCreditCardValid } = require('multiform-validator');

const creditCardNumber = '4111111111111111';
const validationResult = isCreditCardValid(creditCardNumber);

if (validationResult.isValid) {
  console.log('Valid credit card number.');
  console.log('Credit card provider:', validationResult.cardType);
} else {
  console.log('Invalid credit card number.');
}

// Example: Identifying the flag of a credit card
const { identifyFlagCard } = require('multiform-validator');

const creditCardNumber = '5105105105105100';
const cardFlag = identifyFlagCard(creditCardNumber);

if (cardFlag) {
  console.log('Credit card flag:', cardFlag);
} else {
  console.log('Unable to identify credit card flag.');
}
```

If you want to help me, you can buy me a coffee (:

<p align="center">
	<a href="https://www.buymeacoffee.com/gabriellogan" target="_blank">
		<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
	</a>
</p>

Feel free to explore the various functions and experiment with different inputs to understand their behavior. If you encounter any issues or have suggestions, don't hesitate to reach out to me. Your feedback is valuable and helps improve the package. Happy coding!


# By - Gabriel Logan
