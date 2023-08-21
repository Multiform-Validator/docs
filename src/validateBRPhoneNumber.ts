const defaultErrorMsg = ['Invalid value passed', 'Invalid phone number', 'Unknown error'];
/**
 * @param {string} phoneNumber
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @example validateBRPhoneNumber('(11) 98765-4321');
 * @example validateBRPhoneNumber('(11) 98765-4321', ['Invalid phone number', 'Invalid format', 'Unknown error']);
 * @description This function returns three errors in the following order:
 *
 * Default:
 * ['Invalid value passed', 'Invalid phone number', 'Unknown error']
 *
 * Create a list of errors separated by commas in strings
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function validateBRPhoneNumber(phoneNumber: string, errorMsg = defaultErrorMsg) {
  if (typeof phoneNumber !== 'string') throw new TypeError('The input should be a string.');
  // Check to see if the passed error messages are valid; otherwise, return an error
  if (errorMsg) {
    if (!Array.isArray(errorMsg)) throw new Error('errorMsg must be an Array');
    for (let index = 0; index < errorMsg.length; index += 1) {
      if (errorMsg[index] != null && typeof errorMsg[index] !== 'string') {
        throw new TypeError('All values within the array must be strings or null/undefined.');
      }
    }
  }

  // Internal function to get the error message
  function getErrorMessage(index: number) {
    if (errorMsg && index >= 0 && index < errorMsg.length && errorMsg[index] != null) {
      return errorMsg[index];
    }
    return defaultErrorMsg[index];
  }
  if (!phoneNumber) {
    return {
      isValid: false,
      errorMsg: getErrorMessage(0),
    };
  }
  // Regular expression to validate Brazilian phone numbers
  const brPhoneNumberRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  try {
    if (!brPhoneNumberRegex.test(phoneNumber)) {
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
export default validateBRPhoneNumber;
