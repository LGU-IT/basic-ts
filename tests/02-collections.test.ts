import { semesters, uniqueYears, courseGrades } from '../problems/02-collections';

describe('Problem 02: Collections', () => {
  test('semesters array should contain the correct values in order', () => {
    expect(semesters).toEqual(['Fall', 'Spring', 'Summer']);
  });

  test('uniqueYears set should contain the correct unique numbers', () => {
    expect(uniqueYears.has(2023)).toBe(true);
    expect(uniqueYears.has(2024)).toBe(true);
    expect(uniqueYears.has(2025)).toBe(true);
    expect(uniqueYears.size).toBe(3);
  });

  test('courseGrades map should contain the correct key-value pairs', () => {
    expect(courseGrades.get('Programming Foundations')).toBe('A');
    expect(courseGrades.get('Data Structures')).toBe('B');
    expect(courseGrades.size).toBe(2);
  });
});