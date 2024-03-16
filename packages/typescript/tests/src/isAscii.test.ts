import isAscii from '../../src/isAscii';

describe('isAscii', () => {
  it('should return true when the input is ASCII', () => {
    const result = isAscii('valid ASCII');
    expect(result).toBe(true);
  });

  it('should return false when the input is not ASCII', () => {
    const result = isAscii('日本語日本語');
    expect(result).toBe(false);
  });

	it('should throw an error when the input is not a string', () => {
		expect(() => isAscii((12345678910 as any))).toThrow('The input should be a string.');
	});
});
