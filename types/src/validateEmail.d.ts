/**
 * @param email
 * @param maxLength optional
 * @param country optional
 * @param errorMsg optional
 * @param validDomains optional
 * @default maxLength number: 400, validDomains = false
 * @example validateEmail('foor@bar.com', 30, 'us);
 * @example validateEmail('foor@bar.com', 30);
 * @example validateEmail('foor@bar.com', 30, null, ['My own error message']); Country is set to null
 * @example validateEmail('joao@myOwnDomain.com', null, null, null, ['@myOwnDomain.com']);
 * @example validateEmail('joaoaoao@gmail.com.com', null, null, null, true);
 * @description This function returns six errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 * ['Invalid value passed', 'This e-mail is not valid', 'Email too big, try again', 'This email is not valid in the country','Email domain is not allowed.', 'Unknown error']
 *
 * Create a list of errors separated by commas in strings
 *
 * @description You can also pass a list of domains that will be allowed, if you leave the parameter empty, it will be set to false and no check will be performed, you can also pass only true and the following list will be used by default:
 *
 * Default:
 * ['@gmail.com', '@outlook.com', '@yahoo.com', '@icloud.com', '@hotmail.com',
  '@mail.ru', '@yandex.ru', '@gmx.com', '@zoho.com', '@protonmail.com', '@protonmail.ch'];

 * You can also create a custom list, your list will completely replace the default list.

    DOCUMENTATION: https://gabriel-logan.github.io/multiform-validator/srcPage/subPages/functions/validateEmail

 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
declare function validateEmail(email: string, maxLength?: number | null, country?: string | null, errorMsg?: (string | null)[], validDomains?: boolean): {
    isValid: boolean;
    errorMsg: string | null;
};
export default validateEmail;
