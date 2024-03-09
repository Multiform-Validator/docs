/**
 * @param surname
 * @param minLength
 * @param maxLength
 * @param errorMsg
 * @default minLength number: default: 1
 * @default maxLength number: default: 25
 * @example validateSurname('Jackson', 3, 25);
 * @info minLength cannot be greater than maxLength
 * @description This function returns 6 errors in the following order,
 *
 * default:
 *
 * [
  'Surname cannot be empty',
  'Surname cannot contain numbers',
  'Surname cannot contain special characters',
  'This surname is not valid',
  'Surname too big, try again',
  'Unknown error',
];
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validateSurname(surname: string, minLength?: number | null, maxLength?: number | null, errorMsg?: (string | null)[]): {
    isValid: boolean;
    errorMsg: string | null;
};
export default validateSurname;
