import { expect, it } from 'vitest'

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

export const fn = (a, b) => {

}

it('Check', () => {
  expect(fn('cheese', 'cake')).toBe('cheesecake')
  expect(fn('lips', 's')).toBe('slips')
  expect(fn('java', 'script')).toBe('javascript')
})
