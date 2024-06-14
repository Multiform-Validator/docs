import cpfIsValid from '../../src/cpfValidator';

describe('cpfIsValid', () => {
	it('should return isValid as false and the correct error message when CPF is invalid', () => {
		const result = cpfIsValid('12345678902');
		expect(result.isValid).toBe(false);
		expect(result.errorMsg).toBe('CPF is not valid');
	});

	it('should return isValid as true and errorMsg as null when CPF is valid', () => {
		const result = cpfIsValid('12345678909');
		expect(result.isValid).toBe(true);
		expect(result.errorMsg).toBe(null);
	});

	it('should return isValid as false and the correct error message when CPF is invalid', () => {
		const result = cpfIsValid('123.456.789-02');
		expect(result.isValid).toBe(false);
		expect(result.errorMsg).toBe("CPF is not valid");
	});

	it('should return isValid as true and errorMsg as null when CPF is valid', () => {
		const result = cpfIsValid('123.456.789-09');
		expect(result.isValid).toBe(true);
		expect(result.errorMsg).toBe(null);
	});

	it('should return isValid as false and the correct error message when CPF is invalid', () => {
		const result = cpfIsValid('123456789-02');
		expect(result.isValid).toBe(false);
		expect(result.errorMsg).toBe("CPF must have 11 numerical digits");
	});

	it('should throw an error when the input is not a string', () => {
		expect(() => cpfIsValid(12345678910 as any)).toThrow('The input should be a string.');
	});

	it('should throw an error when errorMsg is not an array', () => {
		expect(() => cpfIsValid('12345678910', 'not an array' as any)).toThrow('Must be an Array');
	});

	it('should throw an error when errorMsg contains non-string values', () => {
		expect(() => cpfIsValid('12345678910', [123 as any, 'error message'])).toThrow('All values within the array must be strings or null/undefined.');
	});

	it('should throw an error when errorMsg contains non-string values', () => {
		expect(() => cpfIsValid('12345678910', ['error message', 123 as any])).toThrow('All values within the array must be strings or null/undefined.');
	});
});
