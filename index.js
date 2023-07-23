const cpfIsValid = require('./src/cpfValidator');
const cnpjIsValid = require('./src/cnpjValidator');
const isEmail = require('./src/isEmail');
const validateEmail = require('./src/validateEmail');
const isCEP = require('./src/isCEP');
const validatePassword = require('./src/validatePassword');
const validateUsername = require('./src/validateUsername');

module.exports = {
  cpfIsValid,
  cnpjIsValid,
  isEmail,
  validateEmail,
  isCEP,
  validateUsername,
  validatePassword,
};
