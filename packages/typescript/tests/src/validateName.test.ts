import validateName from '../../src/validateName';
import { ValidateFunctions } from '../../src/types';

describe('validateName', () => {
	it('should return isValid as true for valid names', () => {
		const result: ValidateFunctions = validateName('John');
		expect(result.isValid).toBe(true);
	});

	it('should return isValid as false for names with numbers', () => {
		const result: ValidateFunctions = validateName('John123');
		expect(result.isValid).toBe(false);
		expect(result.errorMsg).toBe('Name cannot contain numbers');
	});

	it('should return isValid as false for names with special characters', () => {
		const result: ValidateFunctions = validateName('John@');
		expect(result.isValid).toBe(false);
		expect(result.errorMsg).toBe('Name cannot contain special characters');
	});

	it('should return isValid as false for names that are too long', () => {
		const result: ValidateFunctions = validateName('JohnJohnJohnJohnJohnJohnJohnJohnJohnJohn');
		expect(result.isValid).toBe(false);
		expect(result.errorMsg).toBe('Name too big, try again');
	});

	it('should throw an error for non-string inputs', () => {
		expect(() => validateName(123 as unknown as string)).toThrow('The input should be a string.');
	});

	it('should throw an error for invalid errorMsg array', () => {
		expect(() => validateName('John', {
			minLength: 1, maxLength: 20, errorMsg: [123 as unknown as string]
		})).toThrow('All values within the array must be strings or null/undefined.');
	});
});
