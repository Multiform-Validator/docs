/* eslint-disable no-unused-vars */
const cpfIsValid = require('./src/cpfValidator');
const cnpjIsValid = require('./src/cnpjValidator');
const getOnlyEmail = require('./src/getOnlyEmail');
const isCEP = require('./src/isCEP');
const isEmail = require('./src/isEmail');
const validateEmail = require('./src/validateEmail');
const validatePassword = require('./src/validatePassword');
const validateUsername = require('./src/validateUsername');
const validateCreditCard = require('./src/isCreditCardValid');
const identifyFlagCard = require('./src/identifyFlagCard');
const isMACAddress = require('./src/isMACAddress');

// Nao feitos ainda
const isAscii = require('./src/isAscii');
const isBase64 = require('./src/isBase64');
const isDate = require('./src/isDate');
const isDecimal = require('./src/isDecimal');
const isEmpty = require('./src/isEmpty');
const isMD5 = require('./src/isMD5');
const isPassaportNumber = require('./src/isPassaportNumber');
const isPort = require('./src/isPort');
const isPostalCode = require('./src/isPostalCode');
const isTime = require('./src/isTime');
const validateName = require('./src/validateName');
const validateTelNumber = require('./src/validateTelNumber');

module.exports = {
  cpfIsValid,
  cnpjIsValid,
  isEmail,
  validateEmail,
  isCEP,
  validateUsername,
  validatePassword,
  getOnlyEmail,
  validateCreditCard,
  identifyFlagCard,
  isMACAddress,
};
