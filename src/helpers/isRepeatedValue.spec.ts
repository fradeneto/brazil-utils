import { isRepeatedArray } from './isRepeatedValue';

describe('helpers/isRepeatedArray', () => {
  it('should throw an error if is not an array', () => {
    const invalidArray: any = 'ad';
    expect(() => {
      isRepeatedArray(invalidArray);
    }).toThrowError('items is not an array');
  });
  it('should return false if array has 0 or 1 elements', () => {
    expect(isRepeatedArray([])).toBe(false);
    expect(isRepeatedArray([1])).toBe(false);
    expect(isRepeatedArray(['abc'])).toBe(false);
  });
  it('should return false if array items is not repeated', () => {
    expect(isRepeatedArray([1, 2, 3, 4])).toBe(false);
    expect(isRepeatedArray(['abc', 'def', 'ghi'])).toBe(false);
  });
  it('should return true if array items is repeated', () => {
    expect(isRepeatedArray([1, 1, 1, 1])).toBe(true);
    expect(isRepeatedArray(['abc', 'abc', 'abc'])).toBe(true);
  });
});
