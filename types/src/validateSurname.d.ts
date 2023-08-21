/**
 * @param {string} surname
 * @param {number} [minLength=1]
 * @param {number} [maxLength=25]
 * @param {string[]} [errorMsg=defaultErrorMsg]
 * @default minLength number: default: 1
 * @default maxLength number: default: 25
 * @example validateSurname('Jackson', 3, 25);
 * @info minLength cannot be greater than maxLength
 * @description This function returns 6 errors in the following order,
 *
 * default:
 *
 * [
  'Invalid value passed',
  'Surname cannot contain numbers',
  'Surname cannot contain special characters',
  'This surname is not valid',
  'Surname too big, try again',
  'Unknown error',
];
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validateSurname(surname: string, minLength?: number, maxLength?: number, errorMsg?: string[]): {
    isValid: boolean;
    errorMsg: string;
} | {
    isValid: boolean;
    errorMsg: null;
};
export default validateSurname;
