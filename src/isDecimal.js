/**
 * @param {string|number} value
 * @example isDecimal('123.45'); // true
 * @example isDecimal('-123.45'); // true
 * @example isDecimal('0.123'); // true
 * @example isDecimal('1,234.56'); // true
 * @example isDecimal('1.234,56'); // false (invalid format)
 * @example isDecimal('abc'); // false (not a valid number)
 * @example isDecimal('12a.34'); // false (not a valid number)
 * @example isDecimal('12.34.56'); // false (not a valid number)
 * @description Values have to be passed as a string
 * @returns {boolean} true or false
 */
function isDecimal(value) {
  if (typeof value !== 'string') {
    if (typeof value === 'number') {
      value = value.toString();
    } else {
      throw new TypeError('Input value must be a string or a number.');
    }
  }
  if (value.trim().length === 0) {
    throw new Error('Input value must not be an empty string.');
  }
  // Regular expression to validate decimal numbers
  const decimalRegex = /^[-+]?(?:\d+(?:[,.]\d*)?|\d*[,.]\d+)$/;
  if (!decimalRegex.test(value)) {
    return false;
  }
  // Check for multiple decimal separators
  const decimalSeparator = value.includes('.') ? '.' : ',';
  const otherSeparator = decimalSeparator === '.' ? ',' : '.';
  if (value.includes(decimalSeparator) && value.includes(otherSeparator)) {
    return false;
  }
  // Additional checks for negative sign
  if (value.startsWith('-')) {
    // Ensure the negative sign is only at the beginning and not elsewhere
    if (value.lastIndexOf('-') > 0) {
      return false;
    }
  }
  return true;
}
module.exports = isDecimal;
