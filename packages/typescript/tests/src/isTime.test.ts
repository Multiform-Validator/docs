import { isTime } from '../../index';

describe('isTime function', () => {
  test('should return true for valid time', () => {
    expect(isTime('12:30')).toBe(true);
    expect(isTime('23:59')).toBe(true);
  });

  test('should return false for invalid time', () => {
    expect(isTime('24:00')).toBe(false);
    expect(isTime('12:60')).toBe(false);
    expect(isTime('abc')).toBe(false);
  });

  it('should return false for invalid time', () => {
    // @ts-ignore
    expect(() => isTime(1)).toThrow('Input value must be a string.');
  });

  it('should return false for invalid time', () => {
    // @ts-ignore
    expect(() => isTime(null)).toThrow('Input value must be a string.');
  });
});
