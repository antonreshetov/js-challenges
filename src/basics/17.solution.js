import { expect, it } from 'vitest'

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

export const fn = (a, b) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  return a
    .split('')
    .map((i) => alphabet[alphabet.indexOf(i) + 1])
    .join('')
}

it('Check', () => {
  expect(fn('bnchmf')).toBe('coding')
  expect(fn('bgddrd')).toBe('cheese')
  expect(fn('sdrshmf')).toBe('testing')
})
