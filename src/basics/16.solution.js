import { expect, it } from 'vitest'

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together
// such that they form the following words:
// 'JavaScript', 'Countryside', and 'Downtown'

export const fn = (a, b) => {
  const removeChar = (str, r) => str.replace(r, '')
  const upperFirst = (str) => str.slice(0, 1).toUpperCase() + str.slice(1)

  const w1 = upperFirst(removeChar(a, '%'))
  const w2 = removeChar(b, '%').split('').reverse().join('')

  return w1 + w2
}

it('Check', () => {
  expect(fn('java', 'tpi%rcS')).toBe('JavaScript')
  expect(fn('c%ountry', 'edis')).toBe('Countryside')
  expect(fn('down', 'nw%ot')).toBe('Downtown')
})
