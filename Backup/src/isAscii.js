/**
 * @param {string} value
 * @example isAscii('Hello'); // true
 * @example isAscii('こんにちは'); // false
 * @example isAscii('12345'); // true
 * @example isAscii(null); // false
 * @example isAscii(undefined); // false
 * @description Values have to be passed as a string
 * @returns {boolean}
 */
function isAscii(value) {
  if (typeof value !== 'string') {
    throw new TypeError('Input value must be a string.');
  }

  if (value.trim().length === 0) {
    throw new Error('Input value must not be an empty string.');
  }

  for (let i = 0; i < value.length; i += 1) {
    const charCode = value.charCodeAt(i);
    if (Number.isNaN(charCode) || charCode > 127) {
      return false;
    }
  }
  return true;
}

module.exports = isAscii;
