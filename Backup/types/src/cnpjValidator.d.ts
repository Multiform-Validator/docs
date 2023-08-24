/**
 * @param cnpj
 * @param errorMsg optional
 * @example cpfIsValid('72.501.263/0001-40');
 * @description This function returns four errors in the following order,
 *
 * If you want to use a default parameter, use null or leave Empty.
 *
 * Default:
 * ['CNPJ invalid', 'CNPJ must have 14 numerical digits', 'CNPJ is not valid', 'Unknown error']
 * .
 *
 * Create a list of errors separated by commas in strings
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function cnpjIsValid(cnpj: string, errorMsg?: (string | null)[]): {
    isValid: boolean;
    errorMsg: string | null;
};
export default cnpjIsValid;
