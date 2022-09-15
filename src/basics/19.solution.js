import { expect, it } from 'vitest'

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

export const fn = (a, n) => {
  return a[n - 1]
}

it('Check', () => {
  expect(fn([1, 2, 3, 4, 5], 3)).toBe(3)
  expect(fn([10, 9, 8, 7, 6], 4)).toBe(7)
})
