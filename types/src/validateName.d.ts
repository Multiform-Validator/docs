/**
 * @param {string} name
 * @param {number} [minLength=1]
 * @param {number} [maxLength=20]
 * @param {string[]} [errorMsg=defaultErrorMsg]
 * @default minLength number: default: 1
 * @default maxLength number: default: 20
 * @example validateName('John', 2, 20);
 * @info minLength cannot be greater than maxLength
 * @description This function returns 6 errors in the following order,
 *
 * default:
 *
 * [
  'Invalid value passed',
  'Name cannot contain numbers',
  'Name cannot contain special characters',
  'This name is not valid',
  'Name too big, try again',
  'Unknown error',
];
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validateName(name: string, minLength?: number, maxLength?: number, errorMsg?: string[]): {
    isValid: boolean;
    errorMsg: string;
} | {
    isValid: boolean;
    errorMsg: null;
};
export default validateName;
