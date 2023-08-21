/**
 * @param {string} password
 * @param {number} [minLength = 1] optional
 * @param {number} [maxLength = Infinity] optional
 * @param {object} options optional
 * @param {boolean} options.requireUppercase optional
 * @param {boolean} options.requireSpecialChar optional
 * @param {boolean} options.requireNumber optional
 * @param {boolean} options.requireString optional
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @default minLength number: 1
 * @default maxLength number: Infinity
 * @default options.requireUppercase: false
 * @default options.requireSpecialChar: false -> Examples !@#$%^&*(),.?":{}|<>
 * @default options.requireNumber: false
 * @default options.requireString: false
 * @example validatePassword('MyP@ssw0rd', 8, 20, { requireUppercase: true, requireSpecialChar: true, requireNumber: true, requireString: true });
 * @example validatePassword('MyP@ssw0rd', 8, 20, { requireUppercase: true, requireSpecialChar: true, requireNumber: true, requireString: true }, ['My own error msg']);
 * @info minLength cannot be greater than maxLength
 * @description This function returns 7 errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 *   [
  'This password is too long',
  'password too short',
  'Requires at least one capital letter',
  'Requires at least one special character',
  'Requires at least one number',
  'Requires at least one letter',
  'Unknown error',
];

 *
 * Create a list of errors separated by commas in strings
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validatePassword(password: string, minLength?: number, maxLength?: number, options?: {
    requireUppercase: boolean;
    requireSpecialChar: boolean;
    requireNumber: boolean;
    requireString: boolean;
}, errorMsg?: string[]): {
    isValid: boolean;
    errorMsg: string;
} | {
    isValid: boolean;
    errorMsg: null;
};
export default validatePassword;
