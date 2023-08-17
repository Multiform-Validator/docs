/**
 * @param {string} value
 * @example isEmpty(''); // true
 * @example isEmpty('   '); // true
 * @example isEmpty('Hello'); // false
 * @example isEmpty('   Hello   '); // false
 * @example isEmpty(null); // false
 * @example isEmpty(undefined); // false
 * @description Values have to be passed as a string
 * @returns {boolean} true or false
 */
function isEmpty(value: string) {
  // Check if the input value is of type string
  if (typeof value !== 'string') {
    throw new TypeError('Input value must be a string.');
  }

  // Remove leading and trailing whitespace and check if the resulting string is empty
  return value.trim().length === 0;
}

export = isEmpty;
