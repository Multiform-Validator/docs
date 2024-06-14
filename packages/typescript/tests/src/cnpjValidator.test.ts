import cnpjIsValid from '../../src/cnpjValidator';

describe('cnpjIsValid function', () => {
  test('should validate a valid CNPJ', () => {
    const result = cnpjIsValid('72.501.263/0001-40');
    expect(result.isValid).toBe(false);
    expect(result.errorMsg).toBe("CNPJ is not valid");
  });

  test('should invalidate an invalid CNPJ', () => {
    const result = cnpjIsValid('12.345.678/0001-91');
    expect(result.isValid).toBe(false);
    expect(result.errorMsg).toBe('CNPJ is not valid');
  });

  test('should invalidate a CNPJ with incorrect length', () => {
    const result = cnpjIsValid('1234567890123');
    expect(result.isValid).toBe(false);
    expect(result.errorMsg).toBe('CNPJ must have 14 numerical digits');
  });

  test('should invalidate a CNPJ with non-digit characters', () => {
    const result = cnpjIsValid('72.501.263/0001-4A');
    expect(result.isValid).toBe(false);
    expect(result.errorMsg).toBe('CNPJ is not valid');
  });

  test('should invalidate an empty CNPJ', () => {
    const result = cnpjIsValid('');
    expect(result.isValid).toBe(false);
    expect(result.errorMsg).toBe('CNPJ invalid');
  });

  test('should throw an error if input is not a string', () => {
    expect(() => {
      cnpjIsValid(12345678901234 as any);
    }).toThrow('The input should be a string.');
  });

  test('should throw an error if errorMsg is not an array', () => {
    expect(() => {
      cnpjIsValid('72.501.263/0001-40', 'error message' as any);
    }).toThrow('Must be an Array');
  });

  test('should throw an error if errorMsg contains non-string values', () => {
    expect(() => {
      cnpjIsValid('72.501.263/0001-40', [123, 'error message'] as any);
    }).toThrow('All values within the array must be strings or null/undefined.');
  });

  test('should return custom error messages', () => {
    const result = cnpjIsValid('12.345.678/0001-91', ['Custom invalid message', 'Custom length message', 'Custom not valid message', 'Custom unknown error message']);
    expect(result.isValid).toBe(false);
    expect(result.errorMsg).toBe('Custom not valid message');
  });

	test('should return false when all digits are repeated', () => {
		const result = cnpjIsValid('11.111.111/1111-11');
		expect(result.isValid).toBe(false);
		expect(result.errorMsg).toBe('CNPJ is not valid');
	});
});
