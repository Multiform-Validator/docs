/**
 * @param {string} username
 * @param {number} [minLength=1] optional
 * @param {number} [maxLength=Infinity] optional
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @default minLength number: 1
 * @default maxLength number: Infinity
 * @example validateUsername('User999', 8, 20);
 * @example validateUsername('User999', 8, 20, ['My own errorsMsg']);
 * @info minLength cannot be greater than maxLength
 * @description This function returns 7 errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 *   [
  'Invalid value passed',
  'username too short',
  'This username is too long',
  'Username cannot contain spaces',
  'Cannot start with number',
  'Cannot contain only numbers',
  'Unknown error'
];
 *
 * Create a list of errors separated by commas in strings
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validateUsername(username: string, minLength?: number, maxLength?: number, errorMsg?: string[]): {
    isValid: boolean;
    errorMsg: string;
} | {
    isValid: boolean;
    errorMsg: null;
};
export default validateUsername;
