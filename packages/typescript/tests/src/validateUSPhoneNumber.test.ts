import validateUSPhoneNumber from '../../src/validateUSPhoneNumber';

describe('validateUSPhoneNumber', () => {
  it('validates US phone number in correct format', () => {
    const result = validateUSPhoneNumber('(555) 123-4567');
    expect(result).toEqual({ isValid: true, errorMsg: null });
  });

  it('returns error for empty US phone number', () => {
    const result = validateUSPhoneNumber('');
    expect(result).toEqual({ isValid: false, errorMsg: 'US phone number cannot be empty' });
  });

  it('returns error for invalid US phone number', () => {
    const result = validateUSPhoneNumber('1234567');
    expect(result).toEqual({ isValid: false, errorMsg: 'Invalid phone number' });
  });

  it('returns custom error for invalid US phone number', () => {
    const result = validateUSPhoneNumber('1234567', [null, 'Custom error 2']);
    expect(result).toEqual({ isValid: false, errorMsg: 'Custom error 2' });
  });

  it('throws error for invalid errorMsg parameter', () => {
    expect(() => validateUSPhoneNumber('(555) 123-4567', [123 as any])).toThrow('All values within the array must be strings or null/undefined.');
  });
});
