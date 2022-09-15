import { expect, it } from 'vitest'

// Write a function that takes two values (a and b) as argument
// Return true if the two values are equal and of the same type

export const fn = (a, b) => {
  return a === b
}

it('Check', () => {
  expect(fn(2, 2)).toBeTruthy()
  expect(fn(2, '2')).toBeFalsy()
  expect(fn('some', 'some')).toBeTruthy()
})
