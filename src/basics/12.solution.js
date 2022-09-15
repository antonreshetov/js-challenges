import { expect, it } from 'vitest'

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

export const fn = (a) => {
  return a === Math.floor(a)
}

it('Check', () => {
  expect(fn(4)).toBeTruthy()
  expect(fn(1.232)).toBeFalsy()
})
