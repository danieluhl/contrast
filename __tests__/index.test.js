import { isAACompliant, isAAACompliant, getContrastRatio } from '../index.js';
import { jest } from '@jest/globals';

const WHITE = [255, 255, 255];
const BLACK = [0, 0, 0];

test('works for AA compliance', () => {
  expect(isAACompliant(BLACK, WHITE)).toBe(true);
  expect(isAACompliant(BLACK, BLACK)).toBe(false);
});

test('works for AAA compliance', () => {
  expect(isAAACompliant(BLACK, WHITE)).toBe(true);
  expect(isAAACompliant(BLACK, BLACK)).toBe(false);
});

test('all fns work with strings', () => {
  const strColor1 = 'rgb(28, 30, 80)';
  const strColor2 = 'rgb(255, 255, 255)';
  expect(isAAACompliant(strColor1, strColor2)).toBe(true);
  expect(isAACompliant(strColor1, strColor2)).toBe(true);
  expect(getContrastRatio(strColor1, strColor2)).toBe(15.54);
});

test('gets contrast ratio', () => {
  expect(getContrastRatio(WHITE, BLACK)).toBe(21);
});
