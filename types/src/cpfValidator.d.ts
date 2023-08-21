/**
 * @param {string} cpf
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @example cpfIsValid('123.456.789.10');
 * @example cpfIsValid('12345678910');
 * @example cpfIsValid('12345678910', ['CPF ta errado','Tem que ter pelo menos 11']);
 * @description This function returns four errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 * ['CPF invalid', 'CPF must have 11 numerical digits', 'CPF is not valid', 'Unknown error']
 * .
 *
 * Create a list of errors separated by commas in strings
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function cpfIsValid(cpf: string, errorMsg?: string[]): {
    isValid: boolean;
    errorMsg: string;
} | {
    isValid: boolean;
    errorMsg: null;
};
export default cpfIsValid;
