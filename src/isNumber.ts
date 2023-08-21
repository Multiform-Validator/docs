/**
 * @param {unknown} value
 * @example isNumber(123)
 * @example isNumber('abc')
 * @description Checks that the value is a valid number.
 * @returns {boolean} true if the value is a valid number, false otherwise.
 */
function isNumber(value: unknown): boolean {
  if (value === null || value === undefined || typeof value === 'boolean') {
    return false;
  }
  if (typeof value === 'string') {
    return !Number.isNaN(parseFloat(value)) && Number.isFinite(parseFloat(value));
  }
  if (typeof value === 'number') {
    return Number.isFinite(value);
  }
  return false;
}
export default isNumber;
