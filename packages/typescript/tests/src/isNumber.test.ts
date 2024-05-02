// Testes para isNumber
import isNumber from '../../src/isNumber';

describe('isNumber', () => {
  it('should return true when the input is a valid string of number', () => {
    const result = isNumber('123');
    expect(result).toBe(true);
  });

  it('should return true when the input is a valid number', () => {
    const result = isNumber(123);
    expect(result).toBe(true);
  });

  it('should return false when the input is not a valid number', () => {
    const result = isNumber('abc');
    expect(result).toBe(false);
  });

	it('should return false when the input is an array', () => {
		const result = isNumber([]);
		expect(result).toBe(false);
	});

	it('should return false when the input is an object', () => {
		const result = isNumber({});
		expect(result).toBe(false);
	});

	it('should return false when the input is a boolean', () => {
		const result = isNumber(true);
		expect(result).toBe(false);
	});

	it('should return false when the input is empty', () => {
		const result = isNumber('');
		expect(result).toBe(false);
	});
});
