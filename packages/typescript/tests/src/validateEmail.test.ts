import  validateEmail from '../../src/validateEmail';

describe('validateEmail', () => {
  it('should throw an error if the input is not a string', () => {
    expect(() => validateEmail(123 as any)).toThrow(TypeError);
  });

  it('should validate a correct email', () => {
    const result = validateEmail('test@gmail.com');
    expect(result.isValid).toBe(true);
    expect(result.errorMsg).toBe(null);
  });

  it('should invalidate an incorrect email', () => {
    const result = validateEmail('test');
    expect(result.isValid).toBe(false);
    expect(result.errorMsg).toBe('This e-mail is not valid');
  });

  it('should validate an corret email length', () => {
    const result = validateEmail('test@teste.com', 25);
    expect(result.isValid).toBe(true);
    expect(result.errorMsg).toBe(null);
  });

  it('should validate an corret email length', () => {
    const result = validateEmail('test@testaaaaaaaaaaaaae.com', 15);
    expect(result.isValid).toBe(false);
    expect(result.errorMsg).toBe("Email cannot be greater than 15 characters");
  });

  it('should invalidate an email with a non-allowed domain', () => {
		// @ts-ignore
    const result = validateEmail('test@notallowed.com', null, null, null, ['@gmail.com']);
    expect(result.isValid).toBe(false);
    expect(result.errorMsg).toBe('Email domain is not allowed.');
  });

  it('should validate an email with a custom allowed domain', () => {
		// @ts-ignore
    const result = validateEmail('test@mydomain.com', null, null, null, ['@mydomain.com']);
    expect(result.isValid).toBe(true);
    expect(result.errorMsg).toBe(null);
  });

	it('should validate an email with the defaults allowed domain', () => {
		// @ts-ignore
    const result = validateEmail('test@gmail.com', null, null, null, true);
    expect(result.isValid).toBe(true);
    expect(result.errorMsg).toBe(null);
  });

	it('should invalidate an email with the defaults allowed domain', () => {
		// @ts-ignore
    const result = validateEmail('test@mydomain.com', null, null, null, true);
    expect(result.isValid).toBe(false);
    expect(result.errorMsg).toBe("Email domain is not allowed.");
  });

  it('should invalidate an email that is too long', () => {
    const result = validateEmail('a'.repeat(401) + '@gmail.com', 400);
    expect(result.isValid).toBe(false);
    expect(result.errorMsg).toBe('Email cannot be greater than 400 characters');
  });
});
