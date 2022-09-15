import { expect, it } from 'vitest'

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

export const fn = (a) => {
  return a.slice(0, -3)
}

it('Check', () => {
  expect(fn('some')).toBe('s')
  expect(fn('javascript')).toBe('javascr')
})
