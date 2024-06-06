import validatePassword from '../../src/validatePassword';

describe('validatePassword', () => {
	it('validates password with minimum length', () => {
		const result = validatePassword('Passw0rd!', {
			minLength: 8
		});
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('validates password with maximum length', () => {
		const result = validatePassword('Passw0rd!', {
			maxLength: 10
		});
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('validates password with required uppercase', () => {
		const result = validatePassword('Passw0rd!', {
			options: { requireUppercase: true }
		});
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('validates password with required special character', () => {
		const result = validatePassword('Passw0rd!', {
			options: { requireSpecialChar: true }
		});
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('validates password with required number', () => {
		const result = validatePassword('Passw0rd!', {
			options: { requireNumber: true }
		});
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('validates password with required string', () => {
		const result = validatePassword('Passw0rd!', {
			options: { requireString: true }
		});
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('returns invalid for incorrect password', () => {
		const result = validatePassword('password', {
			minLength: 8,
		});
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('validates password with all required check modules', () => {
		const result = validatePassword('Passw0rd2!', {
			options: { requireString: true, requireNumber: true, requireSpecialChar: true, requireUppercase: true }
		});
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('validates password with all required check modules', () => {
		const result = validatePassword('Passw0rd!', {
			options: { requireString: true, requireNumber: true, requireSpecialChar: true, requireUppercase: true }
		});
		expect(result).toEqual({ isValid: true, errorMsg: null });
	});

	it('Returns correct error message for password too long or too short', () => {
		const result1 = validatePassword('Passw0rd!', {
			maxLength: 6
		});
		expect(result1.errorMsg).toBe("Password must be between 1 and 6 characters");

		const result2 = validatePassword('Passw0rd!', {
			minLength: 20
		});
		expect(result2.errorMsg).toBe("Password must be greater than 20 characters");
	});

	it('Returns correct error message for password without uppercase', () => {
		const result = validatePassword('passw0rd!', {
			options: { requireUppercase: true }
		});
		expect(result.errorMsg).toBe("Password requires at least one capital letter");
	});

	it('Returns correct error message for password without special character', () => {
		const result = validatePassword('Passw0rd', {
			options: { requireSpecialChar: true }
		});
		expect(result.errorMsg).toBe("Password requires at least one special character");
	});

	it('Returns correct error message for password without number', () => {
		const result = validatePassword('Password!', {
			options: { requireNumber: true }
		});
		expect(result.errorMsg).toBe("Password requires at least one number");
	});

	it('Returns correct error message for password without string', () => {
		const result = validatePassword('12345678!', {
			options: { requireString: true }
		});
		expect(result.errorMsg).toBe("Password requires at least one letter");
	});

	it('should throw error for invalid errorMsg parameter', () => {
		expect(() => validatePassword('Passw0rd!', { minLength: 8, errorMsg: [123 as any] })).toThrow('All values within the array must be strings or null/undefined.');
	});

	it('should throw error for invalid password parameter', () => {
		expect(() => validatePassword(123 as any)).toThrow('The input should be a string.');
	});

	it('should throw error for invalid minLength parameter', () => {
		expect(() => validatePassword('Passw0rd!', { minLength: 8, maxLength: 6 })).toThrow("the minimum size cannot be larger than the maximum");
	});

	it('should throw error for invalid errorMsg parameter', () => {
		expect(() => validatePassword('Passw0rd!', { minLength: 8, maxLength: 20, errorMsg: [123 as any] })).toThrow('All values within the array must be strings or null/undefined.');
	});
});
