/**
 * @param {any} value
 * @example isNumber(123)
 * @example isNumber('abc')
 * @description Checks that the value is a valid number.
 * @returns {boolean} true if the value is a valid number, false otherwise.
 */
function isNumber(value: any) {
  if (value === null || value === undefined || typeof value === 'boolean') {
    return false;
  }
  return !Number.isNaN(parseFloat(value)) && Number.isFinite(value);
}
export = isNumber;
