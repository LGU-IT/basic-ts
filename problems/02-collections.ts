// This problem focuses on TypeScript's collection types.

// 1.  Create an array of strings named 'semesters'. It should contain the strings "Fall", "Spring", and "Summer".
//     This array should not be reassignable.

// 2.  Create a Set of numbers named 'uniqueYears'. Add the numbers 2023, 2024, and 2025 to the set.
//     Sets only store unique values!

// 3.  Create a Map named 'courseGrades'. The keys should be course names (strings) and the values should be
//     letter grades (strings). Add the following entries:
//     - "Programming Foundations": "A"
//     - "Data Structures": "B"

// Write your code below this line

export const semesters: Array<string> = [];

export const uniqueYears: Set<number> = new Set();

export const courseGrades: Map<string, string> = new Map();