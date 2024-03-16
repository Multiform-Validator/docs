// Testes para isCreditCardValid
import isCreditCardValid from '../../src/isCreditCardValid';

describe('isCreditCardValid', () => {
  it('should return true when the input is a valid credit card number', () => {
    const result = isCreditCardValid('5344 9393 8369 0842');
    expect(result).toBe(true);
  });

  it('should return false when the input is not a valid credit card number', () => {
    const result = isCreditCardValid('4111111111111112');
    expect(result).toBe(false);
  });

  it('should throw an error when the input is not a string', () => {
    expect(() => isCreditCardValid((1234567812345678 as any))).toThrow('The input should be a string.');
  });
});
