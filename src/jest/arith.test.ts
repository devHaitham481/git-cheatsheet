import { add, mul, div, sub } from './arith';

test('2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test.skip('3 * 3 = 9', () => {
  expect(mul(3, 5).toBe(12));
});

// Jest parameterized tests: allow us to run the same test multiple times using different values

test.each([
  [1, 1, 0],
  [-1, 2, -3],
  [2, 2, 0],
])('%s - %i  equals %i', (a, b, expected) => {
  expect(sub(a, b)).toBe(expected);
});

test.each([
  [1, 1, 1],
  [-2, -1, 2],
])('%i * %i equals %i', (a, b, expected) => {
  expect(mul(a, b)).toBe(expected);
});
