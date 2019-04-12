import Heap from '../../code/heap/lesson1'

test('Heap', () => {
  let heap = new Heap('chcaa')
  expect(heap.sort()).toMatch(/ccaah|aacch/)
})
