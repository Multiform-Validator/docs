import isBase64 from '../../src/isBase64';

describe('isBase64', () => {
  it('should return true when the input is a valid Base64 string', () => {
    const result = isBase64('SGVsbG8gV29ybGQh');
    expect(result).toBe(true);
  });

  it('should return false when the input is not a valid Base64 string', () => {
    const result = isBase64('こんにちは');
    expect(result).toBe(false);
  });

  it('should return false when the input is not a valid Base64 string', () => {
    const result = isBase64('12345');
    expect(result).toBe(false);
  });

  it('should throw an error when the input is not a string', () => {
    expect(() => isBase64((12345678910 as any))).toThrow('Input value must be a string.');
  });

  it('should throw an error when the input is an empty string', () => {
    expect(() => isBase64('')).toThrow('Input value must not be an empty string.');
  });
});
