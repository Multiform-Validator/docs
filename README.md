# Multiform-validator

[![npm version](https://badge.fury.io/js/multiform-validator.svg)](https://badge.fury.io/js/multiform-validator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## English

This npm package provides JavaScript functions to validate many forms field

### Installation

```bash
npm install multiform-validator
```

Validation modules available:

cnpjValidator,
cpfValidator,
isBase64,
isAscii,
isDate,
isDecimal,
isEmpty,
isMD5,
isMACAddress,
isCEP,
isPostalCode,
isEmail,
validateEmail,
validatePassword,
validateUsername,,
validateTelNumber,
validate,
isPassaportNumber,
isPort,
isTime,
getOnlyEmail
validateCreditCard

# Already working
cnpjValidator,
cpfValidator,
isEmail,
validateEmail,
isCEP,
validateUsername,
validatePassword
getOnlyEmail

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

const resultadoValidacao = validateEmail('email@email.com', 30);

if (resultadoValidacao.isValid) {
  console.log('0 errors');
} else {
  console.log(resultadoValidacao.errorMsg); // returns the error
}

or

const resultadoValidacao = validateEmail('1email@email.com', 30, null, [null, 'Esse email é inválido']);

if (resultadoValidacao.isValid) {
  console.log('0 erros');
} else {
  console.log(resultadoValidacao.errorMsg); // Return  'Esse email é inválido'
}


```

how to use:
```javascript
const {cpfIsValid, cnpjIsValid} = require('multiform-validator');
console.log(cpfIsValid('CPFNUMBER').isValid); return true or false
console.log(cnpjIsValid('CNPJNUMBER').isValid); return true or false

or

import {cpfIsValid, cnpjIsValid} from 'multiform-validator';
console.log(cpfIsValid('CPFNUMBER').isValid); return true or false
console.log(cnpjIsValid('CNPJNUMBER').isValid); return true or false
```

# IMPORTANT
Code under development...

# By - Gabriel Logan
