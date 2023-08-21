/**
 * @param phoneNumber
 * @param errorMsg optional
 * @example validateBRPhoneNumber('(11) 98765-4321');
 * @example validateBRPhoneNumber('(11) 98765-4321', ['Invalid phone number', 'Invalid format', 'Unknown error']);
 * @description This function returns three errors in the following order:
 *
 * Default:
 * ['Invalid value passed', 'Invalid phone number', 'Unknown error']
 *
 * Create a list of errors separated by commas in strings
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validateBRPhoneNumber(phoneNumber: string, errorMsg?: (string | null)[]): {
    isValid: boolean;
    errorMsg: string | null;
};
export default validateBRPhoneNumber;
