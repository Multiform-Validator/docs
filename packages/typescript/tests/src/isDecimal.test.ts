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

	it('should return false when the input is an integer', () => {
		const result = isDecimal('123');
		expect(result).toBe(false);
	});

	it('should return false when the input is a string', () => {
		const result = isDecimal('abc');
		expect(result).toBe(false);
	});

	it('should throw error when the input is an array', () => {
		expect(() => isDecimal([] as any)).toThrow("Input value must be a string or a number.");
	});

	it('should throw error when the input is an object', () => {
		expect(() => isDecimal({} as any)).toThrow("Input value must be a string or a number.");
	});

	it('should throw error when the input is a boolean', () => {
		expect(() => isDecimal(true as any)).toThrow("Input value must be a string or a number.");
	});

	it('should throw error when the input is empty', () => {
		expect(() => isDecimal('')).toThrow("Input value must not be an empty string.");
	});
});
