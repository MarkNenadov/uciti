import { pickRandomItems, shuffleArray } from './RandomUtils';

describe('pickRandomItems', () => {
  test('returns an array with the specified number of items', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const count = 3;
    const result = pickRandomItems(inputArray, count);
    expect(result).toHaveLength(count);
  });

  test('throws an error if count is less than or equal to 0', () => {
    const inputArray = [1, 2, 3, 4, 5];
    expect(() => pickRandomItems(inputArray, 0)).toThrow('Count must be greater than 0');
    expect(() => pickRandomItems(inputArray, -1)).toThrow('Count must be greater than 0');
  });

  test('throws an error if count exceeds the length of the array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    expect(() => pickRandomItems(inputArray, 10)).toThrow('Count must not exceed the length of the array');
  });
});

describe('shuffleArray', () => {
  test('returns an array with the same length as the input array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffleArray(inputArray);
    expect(result).toHaveLength(inputArray.length);
  });

  test('returns a shuffled version of the input array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(inputArray);
    expect(shuffledArray).not.toEqual(inputArray);
  });
});
