import isCEP from '../../src/isCEP';

describe('isCEP', () => {
  it('should return true when the input is a valid CEP', () => {
    const result = isCEP('12345-678');
    expect(result).toBe(true);
  });

  it('should return true when the input is a valid CEP without hyphen', () => {
    const result = isCEP('12345678');
    expect(result).toBe(true);
  });

  it('should return true when the input is a valid CEP with dot and hyphen', () => {
    const result = isCEP('12.345-678');
    expect(result).toBe(true);
  });

  it('should return false when the input is not a valid CEP', () => {
    const result = isCEP('1234567');
    expect(result).toBe(false);
  });

  it('should return false when the input is not a valid CEP', () => {
    const result = isCEP('123456789');
    expect(result).toBe(false);
  });

  it('should throw an error when the input is not a string', () => {
    expect(() => isCEP((12345678 as any))).toThrow('Input value must be a string.');
  });
});
