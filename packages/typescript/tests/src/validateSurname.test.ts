import validateSurname from '../../src/validateSurname';

describe('validateSurname', () => {
	it('validates surname with correct length', () => {
		const result = validateSurname('Jackson', { minLength: 3, maxLength: 25 });
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('returns error for empty surname', () => {
		const result = validateSurname('');
		expect(result).toEqual({ isValid: false, errorMsg: 'Surname cannot be empty' });
	});

	it('returns error for surname with numbers', () => {
		const result = validateSurname('Jack5on');
		expect(result).toEqual({ isValid: false, errorMsg: 'Surname cannot contain numbers' });
	});

	it('returns error for surname with special characters', () => {
		const result = validateSurname('Jack$on');
		expect(result).toEqual({ isValid: false, errorMsg: 'Surname cannot contain special characters' });
	});

	it('returns error for invalid surname', () => {
		const result = validateSurname('Ja', { minLength: 3, maxLength: 25 });
		expect(result).toEqual({ isValid: false, errorMsg: 'This surname is not valid' });
	});

	it('returns error for too long surname', () => {
		const result = validateSurname('JacksonJacksonJacksonJacksonJackson', { minLength: 3, maxLength: 25 });
		expect(result).toEqual({ isValid: false, errorMsg: 'Surname too big, try again' });
	});

	it('throws error for invalid errorMsg parameter', () => {
		expect(() => validateSurname('Jackson', { minLength: 3, maxLength: 25, errorMsg: [123 as unknown as string] })).toThrow('All values within the array must be strings or null/undefined.');
	});
});
