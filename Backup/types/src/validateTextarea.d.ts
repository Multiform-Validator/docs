/**
 * @default isRequired boolean: default: false
 * @default maxLength number: default: 50
 * @description This function returns 2 errors in the following order,
 *
 * default:
 * [
  'This textarea is too big',
  'Can not be empty',
  'Unknown error',
];
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validateTextarea(textarea: string, isRequired?: boolean, maxLength?: number | null, errorMsg?: (string | null)[]): {
    isValid: boolean;
    errorMsg: string | null;
};
export default validateTextarea;
