/**
 * @param {string} textarea
 * @param {boolean} [isRequired=false]
 * @param {number} [maxLength=50]
 * @param {string[]} [errorMsg=defaultErrorMsg]
 * @default isRequired boolean: default: false
 * @default maxLength number: default: 50
 * @example validateTextarea();
 * @example validateTextarea();
 * @example validateTextarea();
 * @description This function returns 2 errors in the following order,
 *
 * default:
 *
 * [
  'This textarea is too big',
  'Can not be empty',
  'Unknown error',
];
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validateTextarea(textarea: string, isRequired?: boolean, maxLength?: number, errorMsg?: string[]): {
    isValid: boolean;
    errorMsg: string;
} | {
    isValid: boolean;
    errorMsg: null;
};
export default validateTextarea;
