/**
 * @param {any} value
 * @example isNumber(123)
 * @example isNumber('abc')
 * @description Checks that the value is a valid number.
 * @returns {boolean} true if the value is a valid number, false otherwise.
 */
function isNumber(value) {
  if (value === null || value === undefined || typeof value === 'boolean') {
    return false;
  }
	return !isNaN(parseFloat(value)) && isFinite(value);
}
module.exports = isNumber;
