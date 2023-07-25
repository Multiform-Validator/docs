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
function isPostalCode(postalCode) {
  if (typeof postalCode !== 'string') throw new TypeError('Input value must be a string.');
  // Regular expressions for supported countries' postal code formats
  const usZipCodeRegex = /^\d{5}(-\d{4})?$/;
  const canadaPostalCodeRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
  const ukPostalCodeRegex = /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s\d[A-Za-z]{2}$/;
  const francePostalCodeRegex = /^\d{5}$/;
  const netherlandsPostalCodeRegex = /^\d{4}$/;
  const japanPostalCodeRegex = /^\d{3}-\d{4}$/;
  const spainPostalCodeRegex = /^\d{5}$/;
  const southAfricaPostalCodeRegex = /^\d{4}$/;
  const germanyPostalCodeRegex = /^\d{5}$/;
  const switzerlandPostalCodeRegex = /^\d{4}$/;
  const brazilPostalCodeRegex = /^\d{5}-\d{3}$/;
  const italyPostalCodeRegex = /^\d{5}$/;
  const usZipCodeOnlyRegex = /^\d{5}$/;
  return (
    usZipCodeRegex.test(postalCode)
    || canadaPostalCodeRegex.test(postalCode)
    || ukPostalCodeRegex.test(postalCode)
    || francePostalCodeRegex.test(postalCode)
    || netherlandsPostalCodeRegex.test(postalCode)
    || japanPostalCodeRegex.test(postalCode)
    || spainPostalCodeRegex.test(postalCode)
    || southAfricaPostalCodeRegex.test(postalCode)
    || germanyPostalCodeRegex.test(postalCode)
    || switzerlandPostalCodeRegex.test(postalCode)
    || brazilPostalCodeRegex.test(postalCode)
    || italyPostalCodeRegex.test(postalCode)
    || usZipCodeOnlyRegex.test(postalCode) // Handle United States ZIP code only (without the optional 4-digit extension)
  );
}

module.exports = isPostalCode;
