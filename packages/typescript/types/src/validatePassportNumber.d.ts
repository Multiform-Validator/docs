import { ValidatePassportNumber } from './types';
/**
 * @example validatePassportNumber('A1234567');
 * @example validatePassportNumber('123456789');
 * @description Values have to be passed as a string
 * @returns return { isValid: boolean, country: string }
 */
declare function validatePassportNumber(passaportNumber: string): ValidatePassportNumber;
export default validatePassportNumber;
