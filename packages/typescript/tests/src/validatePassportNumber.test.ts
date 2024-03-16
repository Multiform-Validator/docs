import validatePassportNumber from '../../src/validatePassportNumber';

describe('validatePassportNumber', () => {
  it('validates United States passport number', () => {
    const result = validatePassportNumber('123456789');
    expect(result).toEqual({ isValid: true, country: 'United States' });
  });

  it('validates United Kingdom passport number', () => {
    const result = validatePassportNumber('AB123456');
    expect(result).toEqual({ isValid: true, country: 'United Kingdom' });
  });

  // Add similar tests for other countries...

  it('returns invalid for incorrect passport number', () => {
    const result = validatePassportNumber('123');
    expect(result).toEqual({ isValid: false, country: null });
  });
});
