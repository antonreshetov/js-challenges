import { expect, it } from 'vitest'

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

export const fn = (a) => {}

it('Check', () => {
  expect(fn([1, 2, 3, 4], 3)).toStrictEqual([4])
  expect(fn([5, 4, 3, 2, 1, 0], 3)).toStrictEqual([2, 1, 0])
})
