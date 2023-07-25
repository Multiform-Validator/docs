const defaultErrorMsg = ['Invalid value passed', 'Invalid phone number', 'Unknown error'];

/**
 * @param {string} phoneNumber
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @example validateUSPhoneNumber('555-123-4567');
 * @example validateUSPhoneNumber('(555) 123-4567', ['Custom error 1', 'Custom error 2']);
 * @description This function validates phone numbers in the USA. It supports various formats, including "XXX-XXX-XXXX", "(XXX) XXX-XXXX", and "1 (XXX) XXX-XXXX".
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validateUSPhoneNumber(phoneNumber, errorMsg = defaultErrorMsg) {
  if (typeof phoneNumber !== 'string') throw new TypeError('The input should be a string.');

  // Regular expression to validate USA phone numbers
  const usPhoneNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})(\s?|-)\d{3}(\s?|-)\d{4}$/;

  // Internal function to get the error message
  function getErrorMessage(index) {
    if (index >= 0 && index < errorMsg.length) {
      return errorMsg[index];
    }
    return 'Unknown error';
  }

  if (!phoneNumber) {
    return {
      isValid: false,
      errorMsg: getErrorMessage(0),
    };
  }

  try {
    const phoneNumberString = phoneNumber.toString(); // seguranca
    if (!usPhoneNumberRegex.test(phoneNumberString)) {
      return {
        isValid: false,
        errorMsg: getErrorMessage(1),
      };
    }

    return {
      isValid: true,
      errorMsg: null,
    };
  } catch (error) {
    return {
      isValid: false,
      errorMsg: getErrorMessage(2),
    };
  }
}

module.exports = validateUSPhoneNumber;
