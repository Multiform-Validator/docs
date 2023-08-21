/**
 * @param {string} phoneNumber
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @example validateUSPhoneNumber('555-123-4567');
 * @example validateUSPhoneNumber('(555) 123-4567', [null, 'Custom error 2']);
 * @description This function validates phone numbers in the USA. It supports various formats, including "XXX-XXX-XXXX", "(XXX) XXX-XXXX", and "1 (XXX) XXX-XXXX".
 * @default {errorMsg} "['Invalid value passed', 'Invalid phone number', 'Unknown error']"
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validateUSPhoneNumber(phoneNumber: string, errorMsg?: string[]): {
    isValid: boolean;
    errorMsg: string;
} | {
    isValid: boolean;
    errorMsg: null;
};
export default validateUSPhoneNumber;
