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
});
