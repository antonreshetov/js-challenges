import { expect, it } from 'vitest'

// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

export const fn = (a, b) => {
  return a + b
}

it('Check', () => {
  expect(fn(2, 4)).toEqual(6)
  expect(fn(10, 10)).toEqual(20)
})
