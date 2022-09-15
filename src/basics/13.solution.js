import { expect, it } from 'vitest'

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

export const fn = (a, b) => {
  return a < b ? a / b : a * b
}

it('Check', () => {
  expect(fn(10, 100)).toBe(0.1)
  expect(fn(90, 45)).toBe(4050)
})
