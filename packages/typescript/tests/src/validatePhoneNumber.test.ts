import validatePhoneNumber from '../../src/validatePhoneNumber';

describe('validatePhoneNumber', () => {
  it('validates phone number in correct format', () => {
    const result = validatePhoneNumber('(555) 123-4567');
    expect(result).toEqual({ isValid: true, errorMsg: null });
  });

  it('returns error for empty phone number', () => {
    const result = validatePhoneNumber('');
    expect(result).toEqual({ isValid: false, errorMsg: 'Phone number cannot be empty' });
  });

  it('returns error for invalid phone number', () => {
    const result = validatePhoneNumber('1234567');
    expect(result).toEqual({ isValid: false, errorMsg: 'Invalid phone number' });
  });

  it('returns custom error for invalid phone number', () => {
    const result = validatePhoneNumber('1234567', [null, 'Custom error 2']);
    expect(result).toEqual({ isValid: false, errorMsg: 'Custom error 2' });
  });

  it('throws error for invalid errorMsg parameter', () => {
    expect(() => validatePhoneNumber('(555) 123-4567', [123 as any])).toThrow('All values within the array must be strings or null/undefined.');
  });
});
