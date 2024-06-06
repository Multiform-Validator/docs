import validateUsername from '../../src/validateUsername';

describe('validateUsername', () => {
	it('validates username with correct length', () => {
		const result = validateUsername('User123', { minLength: 3, maxLength: 25 });
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('returns error for empty username', () => {
		const result = validateUsername('');
		expect(result).toEqual({ isValid: false, errorMsg: 'Username cannot be empty' });
	});

	it('returns error for username with spaces', () => {
		const result = validateUsername('User 123');
		expect(result).toEqual({ isValid: false, errorMsg: 'Username cannot contain spaces' });
	});

	it('returns error for username starting with number', () => {
		const result = validateUsername('123User');
		expect(result).toEqual({ isValid: false, errorMsg: 'Cannot start with a number' });
	});

	it('returns error for username containing only numbers', () => {
		const result = validateUsername('123456');
		expect(result).toEqual({ isValid: false, errorMsg: 'Cannot contain only numbers' });
	});

	it('returns error for invalid username', () => {
		const result = validateUsername('Us', { minLength: 3, maxLength: 25 });
		expect(result).toEqual({ isValid: false, errorMsg: 'Username must be between 3 and 25 characters' });
	});

	it('returns error for too long username', () => {
		const result = validateUsername('User123User123User123User123User123', { minLength: 3, maxLength: 25 });
		expect(result).toEqual({ isValid: false, errorMsg: 'Username must be between 3 and 25 characters' });
	});

	it('throws error for invalid errorMsg parameter', () => {
		expect(() => validateUsername('User123', { minLength: 3, maxLength: 25, errorMsg: [123 as any] })).toThrow('All values within the array must be strings or null/undefined.');
	});

	it('should return true for valid usernames with custom min and max length', () => {
		const result = validateUsername('User123', { minLength: 1, maxLength: 20 });
		expect(result.isValid).toBe(true);
	});

	it('should return false for usernames that are too short', () => {
		const result = validateUsername('U', { minLength: 2, maxLength: 20 });
		expect(result.isValid).toBe(false);
		expect(result.errorMsg).toBe('Username must be between 2 and 20 characters');
	});

	it('should return false for usernames that are too long', () => {
		const result = validateUsername('User123User123User123User123', { minLength: 2, maxLength: 20 });
		expect(result.isValid).toBe(false);
		expect(result.errorMsg).toBe('Username must be between 2 and 20 characters');
	});

	it('Should return true for a valid username User123, User, or User1234', () => {
		const result1 = validateUsername('User123');
		const result2 = validateUsername('User');
		const result3 = validateUsername('User1234');
		expect(result1.isValid).toBe(true);
		expect(result2.isValid).toBe(true);
		expect(result3.isValid).toBe(true);
	});

	it('Should return false for invalid usernames', () => {
		const result1 = validateUsername('User 123');
		const result2 = validateUsername('123User');
		const result3 = validateUsername('@@@@@@');
		expect(result1.isValid).toBe(false);
		expect(result2.isValid).toBe(false);
		expect(result3.isValid).toBe(false);
	});
});
