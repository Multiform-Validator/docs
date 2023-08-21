/**
 * @param {string} cnpj
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @example cpfIsValid('72.501.263/0001-40');
 * @example cpfIsValid('73.506.263/0001-45');
 * @example cpfIsValid('73.506.263/0001-45', ['CNPJ ta errado']);
 * @description This function returns four errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 * ['CNPJ invalid', 'CNPJ must have 14 numerical digits', 'CNPJ is not valid', 'Unknown error']
 * .
 *
 * Create a list of errors separated by commas in strings
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function cnpjIsValid(cnpj: string, errorMsg?: string[]): {
    isValid: boolean;
    errorMsg: string;
} | {
    isValid: boolean;
    errorMsg: null;
};
export default cnpjIsValid;
