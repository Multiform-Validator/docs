// Testes para isDate
import isDate from '../../src/isDate';

describe('isDate', () => {
  it('should return true when the input is a valid date', () => {
    const result = isDate('2022-12-31');
    expect(result).toBe(true);
  });

  it('should throw an error when the input is not a string', () => {
    expect(() => isDate((12345678 as any))).toThrow('Input value must be a string.');
  });
});
