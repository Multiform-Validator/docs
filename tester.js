/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

// OBS

// getOnlyEmail resolver   'awiudwaidu@awduiawid.comASDASDduiawid.com',

const {
  cpfIsValid,
  cnpjIsValid,
  isEmail,
  validateEmail,
  isCEP,
  validateUsername,
  validatePassword,
  getOnlyEmail,
  isCreditCardValid,
  identifyFlagCard,
  isMACAddress,
  isAscii,
  isBase64,
  isDate,
  isDecimal,
  isEmpty,
  isMD5,
  isPort,
  isPostalCode,
  isTime,
  validatePassportNumber,
  validateBRPhoneNumber,
  validateUSPhoneNumber,
  validatePhoneNumber,
  isNumber,
  passwordStrengthTester,
  validateName,
  validateSurname,
  validateTextarea
} = require('./dist/index.js');

console.log('Testing importations:');

const testCases = [
  { name: 'cpfIsValid', value: '123.456.789-09' },
  { name: 'cnpjIsValid', value: '12.345.678/0001-90' },
  { name: 'isEmail', value: 'test@example.com' },
  { name: 'validateEmail', value: 'test@example.com' },
  { name: 'isCEP', value: '12345-678' },
  { name: 'validateUsername', value: 'username123' },
  { name: 'validatePassword', value: 'Password123' },
  { name: 'getOnlyEmail', value: 'test@example.com' },
  { name: 'isCreditCardValid', value: '1234567890123456' },
  { name: 'identifyFlagCard', value: '123456' },
  { name: 'isMACAddress', value: '00:1A:2B:3C:4D:5E' },
  { name: 'isAscii', value: 'Hello, World!' },
  { name: 'isBase64', value: 'SGVsbG8sIFdvcmxkIQ==' },
  { name: 'isDate', value: '2023-08-19' },
  { name: 'isDecimal', value: '123.45' },
  { name: 'isEmpty', value: '' },
  { name: 'isMD5', value: 'd41d8cd98f00b204e9800998ecf8427e' },
  { name: 'isPort', value: '8080' },
  { name: 'isPostalCode', value: '12345-678' },
  { name: 'isTime', value: '12:34:56' },
  { name: 'validatePassportNumber', value: 'AB123456' },
  { name: 'validateBRPhoneNumber', value: '(12) 34567-8901' },
  { name: 'validateUSPhoneNumber', value: '(123) 456-7890' },
  { name: 'validatePhoneNumber', value: '123-456-7890' },
  { name: 'isNumber', value: '123' },
  { name: 'passwordStrengthTester', value: 'Password123' },
  { name: 'validateName', value: 'John' },
  { name: 'validateSurname', value: 'Doe' },
  { name: 'validateTextarea', value: 'Hello, World!' },
];

let allTestsPassed = true;

testCases.forEach(({ name, value }) => {
  try {
    const result = eval(`${name}('${value}')`);
    console.log(`${name}('${value}'): OK \n`);
  } catch (error) {
    console.log(`${name}('${value}'): Error - ${error.message} \n`);
    allTestsPassed = false;
  }
});

if (allTestsPassed) {
  console.log('All tests passed successfully: OK \n');
} else {
  console.log('Some tests did not pass: Error\n');
}

