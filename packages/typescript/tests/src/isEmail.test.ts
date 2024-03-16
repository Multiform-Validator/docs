import isEmail from '../../src/isEmail';

describe('isEmail', () => {
  it('returns true for valid email', () => {
    expect(isEmail('foo@bar.com')).toBe(true);
  });

  it('returns false for email without domain', () => {
    expect(isEmail('foo@bar')).toBe(false);
  });

  it('returns false for email starting with a number', () => {
    expect(isEmail('1foo@bar.com')).toBe(false);
  });

  it('returns false for email with number after @', () => {
    expect(isEmail('foo@1bar.com')).toBe(false);
  });

  it('returns false for email with number after last dot', () => {
    expect(isEmail('foo@bar.1com')).toBe(false);
  });

  it('returns false for non-string input', () => {
    // @ts-ignore
    expect(isEmail(123)).toBe(false);
  });

  it('returns false for null or empty input', () => {
    expect(isEmail('')).toBe(false);
  });
});
