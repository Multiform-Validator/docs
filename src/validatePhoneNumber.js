const defaultErrorMsg = ['Invalid value passed', 'Invalid phone number', 'Unknown error'];

/**
 * @param {string} phoneNumber
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @example validatePhoneNumber('555-123-4567');
 * @example validatePhoneNumber('(555) 123-4567', ['Custom error 1', 'Custom error 2']);
 * @description This function is a generic phone number validator. It can validate phone numbers in various formats depending on the specific implementation.
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validatePhoneNumber(phoneNumber, errorMsg = defaultErrorMsg) {
  if (typeof phoneNumber !== 'string') throw new TypeError('The input should be a string.');

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

  // Add specific phone number validation logic here for different countries/formats
  // For the generic implementation, we'll use a dummy regex that matches any string.
  const dummyRegex = /.*/;

  try {
    const phoneNumberString = phoneNumber.toString(); // Just for safety
    if (!dummyRegex.test(phoneNumberString)) {
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

module.exports = validatePhoneNumber;
