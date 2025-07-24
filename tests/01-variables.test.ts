import { courseName, studentCount, isFinished } from '../problems/01-variables';

describe('Problem 01: Variables', () => {
  test('courseName should be a constant string with the correct value', () => {
    expect(typeof courseName).toBe('string');
    expect(courseName).toBe('Software Construction');
  });

  test('studentCount should be a number greater than or equal to 0', () => {
    expect(typeof studentCount).toBe('number');
    expect(studentCount).toBeGreaterThanOrEqual(0);
    expect(studentCount).not.toBe(0); // Ensures the student changed the default value
  });

  test('isFinished should be a boolean with the value false', () => {
    expect(typeof isFinished).toBe('boolean');
    expect(isFinished).toBe(false);
  });
});