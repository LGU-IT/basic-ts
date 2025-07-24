import { sumScores } from '../problems/05-iteration';

describe('Problem 05: Iteration', () => {
  test('should return the correct sum for a non-empty array', () => {
    expect(sumScores([10, 20, 30])).toBe(60);
  });

  test('should return 0 for an empty array', () => {
    expect(sumScores([])).toBe(0);
  });

  test('should handle an array with a single element', () => {
    expect(sumScores([100])).toBe(100);
  });

  test('should handle an array with negative numbers', () => {
    expect(sumScores([10, -5, 15])).toBe(20);
  });
});