import isMD5 from '../../src/isMD5';

describe('isMD5', () => {
  it('returns true for valid MD5 hash', () => {
    expect(isMD5('6df23dc03f9b54cc38a0fc1483df6e21')).toBe(true);
  });

  it('returns false for non-MD5 string', () => {
    expect(isMD5('Hello')).toBe(false);
  });

  it('returns false for string with length not equal to 32', () => {
    expect(isMD5('d41d8cd98f00b204e9800998ecf8427e123')).toBe(false);
  });

  it('returns false for non-string input', () => {
    // @ts-ignore
    expect(() => isMD5(123)).toThrow(TypeError);
  });

  it('returns false for null or empty input', () => {
    expect(isMD5('')).toBe(false);
  });

  it('returns false for all zero hash', () => {
    expect(isMD5('00000000000000000000000000000000')).toBe(false);
  });

  it('returns false for weak hash', () => {
    expect(isMD5('d41d8cd98f00b204e9800998ecf8427e')).toBe(false);
  });
});
