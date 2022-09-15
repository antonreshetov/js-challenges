import { expect, it } from 'vitest'

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

export const fn = (a) => {
  return Number(a.toFixed(2))
}

it('Check', () => {
  expect(fn(2.12397)).toBe(2.12)
  expect(fn(3.136)).toBe(3.14)
  expect(fn(26.1379)).toBe(26.14)
})
