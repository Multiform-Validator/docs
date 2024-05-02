import validateTextarea from '../../src/validateTextarea';

describe('validateTextarea', () => {
	it('validates textarea with correct length', () => {
		const result = validateTextarea('This is a valid textarea.', { isRequired: true, maxLength: 50 });
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('returns error for empty textarea when isRequired is true', () => {
		const result = validateTextarea('', { isRequired: true, maxLength: 50 });
		expect(result).toEqual({ isValid: false, errorMsg: 'Can not be empty' });
	});

	it('returns error for textarea exceeding maxLength', () => {
		const result = validateTextarea('This is a very long textarea that exceeds the maximum length.', { isRequired: true, maxLength: 20 });
		expect(result).toEqual({ isValid: false, errorMsg: 'Textarea cannot exceed 20 characters' });
	});

	it('returns custom error for textarea exceeding maxLength', () => {
		const result = validateTextarea('This is a very long textarea that exceeds the maximum length.', { isRequired: true, maxLength: 20, errorMsg: ['Custom error 1', 'Custom error 2', 'Custom error 3'] });
		expect(result).toEqual({ isValid: false, errorMsg: 'Custom error 1' });
	});

	it('throws error for invalid errorMsg parameter', () => {
		expect(() => validateTextarea('This is a valid textarea.', { isRequired: true, maxLength: 50, errorMsg: [123 as any] })).toThrow('All values within the array must be strings or null/undefined.');
	});
});
