import { expect, it } from 'vitest'

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

export const fn = (a, n) => {
  return a[n - 1]
}

it('Check', () => {
  expect(fn('some', 1)).toBe('s')
  expect(fn('javascript', 6)).toBe('c')
})
