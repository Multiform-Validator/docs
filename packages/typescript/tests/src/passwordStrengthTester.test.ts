import { passwordStrengthTester } from '../../index';

describe('passwordStrengthTester function', () => {
  test('should return correct strength type', () => {
    expect(passwordStrengthTester('12345')).toBe('veryWeak');
    expect(passwordStrengthTester('abcdef')).toBe('weak');
    expect(passwordStrengthTester('abc12345')).toBe('regular');
    expect(passwordStrengthTester('Abc123awdasd')).toBe('strong');
    expect(passwordStrengthTester('SuperSecurePassword123!@')).toBe('veryStrong');
  });
});
