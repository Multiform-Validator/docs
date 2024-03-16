import isEmpty from '../../src/isEmpty';

describe('isEmpty', () => {
  it('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('returns true for string with only spaces', () => {
    expect(isEmpty('   ')).toBe(true);
  });

  it('returns false for string with characters', () => {
    expect(isEmpty('Hello')).toBe(false);
  });

  it('returns false for string with characters and spaces', () => {
    expect(isEmpty('   Hello   ')).toBe(false);
  });

  it('throws TypeError for non-string input', () => {
    // @ts-ignore
    expect(() => isEmpty(null)).toThrow(TypeError);
    // @ts-ignore
    expect(() => isEmpty(undefined)).toThrow(TypeError);
  });
});
