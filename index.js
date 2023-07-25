const cpfIsValid = require('./src/cpfValidator');
const cnpjIsValid = require('./src/cnpjValidator');
const getOnlyEmail = require('./src/getOnlyEmail');
const isCEP = require('./src/isCEP');
const isEmail = require('./src/isEmail');
const validateEmail = require('./src/validateEmail');
const validatePassword = require('./src/validatePassword');
const validateUsername = require('./src/validateUsername');
const isCreditCardValid = require('./src/isCreditCardValid');
const identifyFlagCard = require('./src/identifyFlagCard');
const isMACAddress = require('./src/isMACAddress');
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
const validateBRPhoneNumber = require('./src/validateBRPhoneNumber');
const validateUSPhoneNumber = require('./src/validateUSPhoneNumber');
const validatePhoneNumber = require('./src/validatePhoneNumber');

// Nao feitos ainda
// eslint-disable-next-line no-unused-vars
const validateName = require('./src/validateName');

module.exports = {
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
  isPassaportNumber,
  isPort,
  isPostalCode,
  isTime,
  validateBRPhoneNumber,
  validateUSPhoneNumber,
  validatePhoneNumber,
};
