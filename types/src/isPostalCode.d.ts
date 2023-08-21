/**
 * @param {string} postalCode
 * @example isPostalCode('12345'); // true (United States)
 * @example isPostalCode('M4B 1B3'); // true (Canada)
 * @example isPostalCode('SW1A 1AA'); // true (United Kingdom)
 * @example isPostalCode('75013'); // true (France)
 * @example isPostalCode('1012'); // true (Netherlands)
 * @example isPostalCode('100-0001'); // true (Japan)
 * @example isPostalCode('28001'); // true (Spain)
 * @example isPostalCode('8000'); // true (South Africa)
 * @example isPostalCode('13355'); // true (Germany)
 * @example isPostalCode('1002'); // true (Switzerland)
 * @example isPostalCode('10045-123'); // true (Brazil)
 * @example isPostalCode('00100'); // true (Italy)
 * @example isPostalCode('90210'); // true (United States ZIP Code)
 * @description Values have to be passed as a string. Supported countries: United States, Canada, United Kingdom, France, Netherlands, Japan, Spain, South Africa, Germany, Switzerland, Brazil, Italy.
 * @returns {boolean} true or false
 */
declare function isPostalCode(postalCode: string): boolean;
export default isPostalCode;
