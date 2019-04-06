import leastInterval from '../../code/queue/lesson2'

test('leastInterval', () => {
  expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'])).toBe(8)
})
