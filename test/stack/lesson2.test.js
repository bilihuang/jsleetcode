import maxRect from '../../code/stack/lesson2'

test('maxRect', () => {
  expect(maxRect([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ])).toBe(6)
})
