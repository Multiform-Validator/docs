// Testes para isDecimal
import isDecimal from '../../src/isDecimal';

describe('isDecimal', () => {
  it('should return true when the input is a valid decimal number', () => {
    const result = isDecimal('123.45');
    expect(result).toBe(true);
  });

  it('should return false when the input is not a valid decimal number', () => {
    const result = isDecimal('123.456.789');
    expect(result).toBe(false);
  });
});
