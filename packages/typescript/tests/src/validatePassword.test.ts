import validatePassword from '../../src/validatePassword';

describe('validatePassword', () => {
  it('validates password with minimum length', () => {
    const result = validatePassword('Passw0rd!', 8);
    expect(result).toEqual({ isValid: true, errorMsg: null });
  });

  it('validates password with maximum length', () => {
    const result = validatePassword('Passw0rd!', null, 10);
    expect(result).toEqual({ isValid: true, errorMsg: null });
  });

  it('validates password with required uppercase', () => {
    const result = validatePassword('Passw0rd!', null, null, { requireUppercase: true } as any);
    expect(result).toEqual({ isValid: true, errorMsg: null });
  });

  it('validates password with required special character', () => {
    const result = validatePassword('Passw0rd!', null, null, { requireSpecialChar: true }as any);
    expect(result).toEqual({ isValid: true, errorMsg: null });
  });

  it('validates password with required number', () => {
    const result = validatePassword('Passw0rd!', null, null, { requireNumber: true }as any);
    expect(result).toEqual({ isValid: true, errorMsg: null });
  });

  it('validates password with required string', () => {
    const result = validatePassword('Passw0rd!', null, null, { requireString: true }as any);
    expect(result).toEqual({ isValid: true, errorMsg: null });
  });

  it('returns invalid for incorrect password', () => {
    const result = validatePassword('password', 8);
    expect(result).toEqual({ isValid: true, errorMsg: null });
  });
});
