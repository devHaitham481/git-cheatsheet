import { sum, positive, negative } from './math-utils';
import { isPalindrome, isAnagram } from './string-utils';

describe('testing math utilities', () => {
  let vals;
  let pos_vals;
  let neg_vals;
  let sum_of_vals;

  beforeAll(() => {
    pos_vals = [2, 1, 3];
    neg_vals = [-1, -2, -1];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((a, b) => a + b, 0);
  });

  test('the sum of vals should be 2', () => {
    expect(sum(vals)).toBe(sum_of_vals);
  });

  test('shoudl get positive values', () => {
    expect(positive(vals)).toEqual(pos_vals);
  });
});

describe('testing string utilities', () => {
  test.each(['racecar', 'radar', 'level', 'refer', 'deified', 'civic'])(
    'testing %s for palindrome',
    (word) => {
      expect(isPalindrome(word)).toBeTruthy();
    }
  );

  test.each([
    ['arc', 'car'],
    ['cat', 'act'],
    ['cider', 'cried'],
  ])('testing %s and %s are anagrams', (word1, word2) => {
    expect(isAnagram(word1, word2)).toBeTruthy();
  });
});
