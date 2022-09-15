import { expect, it } from 'vitest'

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

export const fn = (a, b) => {
  return b.split(a).length - 1
}

it('Check', () => {
  expect(
    fn('m', 'how many times does the character occur in this sentence?')
  ).toBe(2)
  expect(
    fn('h', 'how many times does the character occur in this sentence?')
  ).toBe(4)
  expect(
    fn('z', 'how many times does the character occur in this sentence?')
  ).toBe(0)
})
