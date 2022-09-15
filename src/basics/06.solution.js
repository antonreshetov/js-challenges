import { expect, it } from 'vitest'

// Write a function that takes a string (a) as argument
// Extract the last 3 characters from the string
// Return the result

export const fn = (a) => {
  return a.slice(-3)
}

it('Check', () => {
  expect(fn('some')).toBe('ome')
  expect(fn('javascript')).toBe('ipt')
})
