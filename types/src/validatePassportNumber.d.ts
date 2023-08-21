/**
 * @param {string} passaportNumber
 * @example validatePassportNumber('A1234567');
 * @example validatePassportNumber('123456789');
 * @description Values have to be passed as a string
 * @returns {object} return { isValid: boolean, country: string }
 */
declare function validatePassportNumber(passaportNumber: string): {
    isValid: boolean;
    country: string;
} | {
    isValid: boolean;
    country: null;
};
export default validatePassportNumber;
