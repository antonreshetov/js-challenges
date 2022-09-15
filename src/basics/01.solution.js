import { expect, it } from 'vitest'

// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

export const addTwoNumbers = (a, b) => {
  return a + b
}

it('Check', () => {
  expect(addTwoNumbers(2, 4)).toEqual(6)
  expect(addTwoNumbers(10, 10)).toEqual(20)
})
