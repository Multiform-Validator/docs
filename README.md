# Multiform-validator

[![npm version](https://badge.fury.io/js/multiform-validator.svg)](https://badge.fury.io/js/multiform-validator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## English

This npm package provides JavaScript functions to validate many forms field

### Installation

```bash
npm install multiform-validator
```

Validation modules available
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

# Already working
cnpjValidator,
cpfValidator,
isEmail,
validateEmail,

validateEmail example:

```javascript
const {validateEmail} = require('multiform-validator');
or
import {validateEmail} from 'multiform-validator';

// Two last parameters are optional
console.log(validateEmail('email@email.com', 30, 'br')) return false
console.log(validateEmail('email@email.com.br', 30, 'br')) return true
console.log(validateEmail('email@email.com', 30)) return true
```

how to use:
```javascript
const {cpfIsValid, cnpjIsValid} = require('multiform-validator');
console.log(cpfIsValid('CPFNUMBER')); return true or false
console.log(cnpjIsValid('CNPJNUMBER')); return true or false

or

import {cpfIsValid, cnpjIsValid} from 'multiform-validator';
console.log(cpfIsValid('CPFNUMBER')); return true or false
console.log(cnpjIsValid('CNPJNUMBER')); return true or false
```

# IMPORTANT
Code under development...

# By - Gabriel Logan
