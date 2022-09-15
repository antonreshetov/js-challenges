import { expect, it } from 'vitest'

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then subtract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

export const fn = (a, b, c, d, e, f) => {
  return Math.pow(((a + b - c) * d) / e, f)
}

it('Check', () => {
  expect(fn(6, 5, 4, 3, 2, 1)).toBe(10.5)
  expect(fn(6, 2, 1, 4, 2, 3)).toBe(2744)
})
