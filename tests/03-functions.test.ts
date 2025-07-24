import { Weekday, isBusinessDay } from '../problems/03-functions';

describe('Problem 03: Functions and Enums', () => {
  test('Weekday enum should have the correct members', () => {
    expect(Weekday.MONDAY).toBeDefined();
    expect(Weekday.TUESDAY).toBeDefined();
    expect(Weekday.WEDNESDAY).toBeDefined();
    expect(Weekday.THURSDAY).toBeDefined();
    expect(Weekday.FRIDAY).toBeDefined();
  });

  test('isBusinessDay function should return true for all weekdays', () => {
    expect(isBusinessDay(Weekday.MONDAY)).toBe(true);
    expect(isBusinessDay(Weekday.TUESDAY)).toBe(true);
    expect(isBusinessDay(Weekday.WEDNESDAY)).toBe(true);
    expect(isBusinessDay(Weekday.THURSDAY)).toBe(true);
    expect(isBusinessDay(Weekday.FRIDAY)).toBe(true);
  });
});