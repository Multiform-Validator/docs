import { ValidateFunctions } from './types';
/**
 * @default isRequired boolean: default: false
 * @default maxLength number: default: 50
 * @description This function returns 2 errors in the following order,
 *
 * default:
 * [
  'Textarea cannot exceed ${maxTextAreaLength} characters',
  'Can not be empty',
  'Unknown error',
];
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validateTextarea(textarea: string, isRequired?: boolean, maxLength?: number | null, errorMsg?: (string | null)[] | null): ValidateFunctions;
export default validateTextarea;
