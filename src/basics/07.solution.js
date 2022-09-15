import { expect, it } from 'vitest'

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

export const fn = (a) => {
  return a.slice(a.length / 2)
}

it('Check', () => {
  expect(fn('some')).toBe('me')
  expect(fn('javascript')).toBe('cript')
})
