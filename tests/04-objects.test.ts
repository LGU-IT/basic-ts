import { Student, lguStudent } from '../problems/04-objects';

describe('Problem 04: Objects', () => {
  test('lguStudent object should conform to the Student type and have valid data', () => {
    // Check types
    expect(typeof lguStudent.studentID).toBe('number');
    expect(typeof lguStudent.firstName).toBe('string');
    expect(typeof lguStudent.lastName).toBe('string');
    expect(typeof lguStudent.major).toBe('string');

    // Check for non-empty/default values
    expect(lguStudent.studentID).toBeGreaterThan(0);
    expect(lguStudent.firstName.length).toBeGreaterThan(0);
    expect(lguStudent.lastName.length).toBeGreaterThan(0);
    expect(lguStudent.major.length).toBeGreaterThan(0);
  });
});