import { expect, it } from 'vitest'

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

export const fn = (a) => {
  return a.slice(3)
}

it('Check', () => {
  expect(fn('some')).toBe('e')
  expect(fn('javascript')).toBe('ascript')
})
