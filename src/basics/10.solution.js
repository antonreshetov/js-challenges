import { expect, it } from 'vitest'

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

export const fn = (a) => {
  return a % 2 === 0
}

it('Check', () => {
  expect(fn(10)).toBeTruthy()
  expect(fn(5)).toBeFalsy()
  expect(fn(-8)).toBeTruthy()
})
