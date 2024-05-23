// Testes para isDecimal
import isDecimal from '../../src/isDecimal';

describe('isDecimal', () => {
	const errorToThrow = "Input value must be a string or a number."; // Mensagem de erro a ser lançada

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
		expect(() => isDecimal([] as any)).toThrow(errorToThrow);
	});

	it('should throw error when the input is an object', () => {
		expect(() => isDecimal({} as any)).toThrow(errorToThrow);
	});

	it('should throw error when the input is a boolean', () => {
		expect(() => isDecimal(true as any)).toThrow(errorToThrow);
	});

	it('should throw error when the input is empty', () => {
		expect(() => isDecimal('')).toThrow("Input value must not be an empty string.");
	});

	it('should throw error when the input is a whitespace', () => {
		expect(() => isDecimal(' ')).toThrow("Input value must not be an empty string.");
	});

	it('should throw error when the input is a null', () => {
		expect(() => isDecimal(null as any)).toThrow(errorToThrow);
	});

	it('should throw error when the input is undefined', () => {
		expect(() => isDecimal(undefined as any)).toThrow(errorToThrow);
	});

	it('should throw error when the input is NaN', () => {
		expect(() => isDecimal(NaN as any)).toThrow("Input value must not be NaN.");
	});

	it('should throw error when the input is Infinity', () => {
		expect(() => isDecimal(Infinity as any)).toThrow("Input value must not be Infinity, -Infinity or NaN.");
	});

	it('should throw error when the input is -Infinity', () => {
		expect(() => isDecimal(-Infinity as any)).toThrow("Input value must not be Infinity, -Infinity or NaN.");
	});

	it('should throw error when the input is a function', () => {
		function func() {}

		expect(() => isDecimal(func() as any) as any).toThrow(errorToThrow);
	});

	it('should throw error when the input is a symbol', () => {
		expect(() => isDecimal(Symbol() as any) as any).toThrow(errorToThrow);
	});
});
