import { ValidateFunctions } from './types';
/**
 * @param phoneNumber
 * @param errorMsg optional
 * @example validatePhoneNumber('555-123-4567');
 * @example validatePhoneNumber('(555) 123-4567', [null, 'Custom error 2']);
 * @default {errorMsg} ['Phone number cannot be empty', 'Invalid phone number', 'Unknown error']
 * @description This function is a generic phone number validator. It can validate phone numbers in various formats depending on the specific implementation.
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validatePhoneNumber(phoneNumber: string, errorMsg?: (string | null)[] | null): ValidateFunctions;
export default validatePhoneNumber;
