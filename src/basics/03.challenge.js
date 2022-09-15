import { expect, it } from 'vitest'

// Write a function that takes a value as argument
// Return the type of the value

export const fn = (a) => {

}

it('Check', () => {
  expect(fn(1)).toBe('number')
  expect(fn('1')).toBe('string')
  expect(fn(true)).toBe('boolean')
  expect(fn({})).toBe('object')
  expect(fn(null)).toBe('object')
  expect(fn([1])).toBe('object')
})
