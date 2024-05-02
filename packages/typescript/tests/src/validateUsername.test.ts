import validateUsername from '../../src/validateUsername';

describe('validateUsername', () => {
  it('validates username with correct length', () => {
    const result = validateUsername('User123', 3, 25);
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
    const result = validateUsername('Us', 3, 25);
    expect(result).toEqual({ isValid: false, errorMsg: 'Username must be between 3 and 25 characters' });
  });

  it('returns error for too long username', () => {
    const result = validateUsername('User123User123User123User123User123', 3, 25);
    expect(result).toEqual({ isValid: false, errorMsg: 'Username must be between 3 and 25 characters' });
  });

  it('throws error for invalid errorMsg parameter', () => {
    expect(() => validateUsername('User123', 3, 25, [123 as any])).toThrow('All values within the array must be strings or null/undefined.');
  });
});
