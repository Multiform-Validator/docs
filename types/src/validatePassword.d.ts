interface Options {
    requireUppercase: boolean;
    requireSpecialChar: boolean;
    requireNumber: boolean;
    requireString: boolean;
}
/**
 * @param password
 * @param minLength optional
 * @param maxLength optional
 * @param options optional
 * @param options.requireUppercase optional
 * @param options.requireSpecialChar optional
 * @param options.requireNumber optional
 * @param options.requireString optional
 * @param errorMsg optional
 * @default minLength number: 1
 * @default maxLength number: Infinity
 * @default {requireUppercase}: false
 * @default {requireSpecialChar}: false -> Examples !@#$%^&*(),.?":{}|<>
 * @default {requireNumber}: false
 * @default {requireString}: false
 * @example validatePassword('MyP@ssw0rd', 8, 20, { requireUppercase: true, requireSpecialChar: true, requireNumber: true, requireString: true });
 * @example validatePassword('MyP@ssw0rd', 8, 20, { requireUppercase: true, requireSpecialChar: true, requireNumber: true, requireString: true }, ['My own error msg']);
 * @info minLength cannot be greater than maxLength
 * @description This function returns 7 errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 *   [
  'This password is too long',// Password must be between ${minLenthPassword} and ${maxLenthPassword} characters
  'password too short',// Password must be between ${minLenthPassword} and ${maxLenthPassword} characters
  'Requires at least one capital letter',
  'Requires at least one special character',
  'Requires at least one number',
  'Requires at least one letter',
  'Unknown error',
];

 *
 * Create a list of errors separated by commas in strings
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validatePassword(password: string, minLength?: number | null, maxLength?: number | null, options?: Options, errorMsg?: (string | null)[]): {
    isValid: boolean;
    errorMsg: string | null;
};
export default validatePassword;
