// Testes para isPostalCode
import isPostalCode from '../../src/isPostalCode';

describe('isPostalCode', () => {
  it('should return true when the input is a valid postal code', () => {
    const result = isPostalCode('90210');
    expect(result).toBe(true);
  });

/**
 *   it('should return false when the input is not a valid postal code', () => {
    const result = isPostalCode('9021');
    expect(result).toBe(false);
  });
 *
 */

/**
 *
 *   it('should throw an error when the input is not a string', () => {
    expect(() => isPostalCode((12345678 as any))).toThrow('Input value must be a string.');
  });
 */
});
