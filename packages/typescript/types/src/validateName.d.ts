import { ValidateFunctions } from './types';
/**
 * @param name
 * @param minLength
 * @param maxLength
 * @param errorMsg
 * @default minLength number: default: 1
 * @default maxLength number: default: 20
 * @example validateName('John', 2, 20);
 * @info minLength cannot be greater than maxLength
 * @description This function returns 6 errors in the following order,
 *
 * default:
 *
 * [
  'Name cannot be empty',
  'Name cannot contain numbers',
  'Name cannot contain special characters',
  'This name is not valid',
  'Name too big, try again',
  'Unknown error',
];
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validateName(name: string, minLength?: number | null, maxLength?: number | null, errorMsg?: (string | null)[] | null): ValidateFunctions;
export default validateName;
