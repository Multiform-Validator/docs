// Testes para isMacAddress
import isMacAddress from '../../src/isMACAddress';

describe('isMacAddress', () => {
  it('should return true when the input is a valid MAC address', () => {
    const result = isMacAddress('00:0a:95:9d:68:16');
    expect(result).toBe(true);
  });

  it('should return false when the input is not a valid MAC address', () => {
    const result = isMacAddress('00:0a:95:9d:68:1g');
    expect(result).toBe(false);
  });

  it('should throw an error when the input is not a string', () => {
    expect(() => isMacAddress((12345678 as any))).toThrow('The input should be a string.');
  });
});
