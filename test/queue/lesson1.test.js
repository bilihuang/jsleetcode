import MyCircularQueue from '../../code/queue/lesson1'

test('MyCircularQueue', () => {
  let queue = new MyCircularQueue(4)
  queue.enQueue(2)
  expect(queue.isFull()).toBe(false)
  expect(queue.enQueue(1)).toBe(true)
  expect(queue.Front()).toBe(2)
  expect(queue.Rear()).toBe(1)
  expect(queue.deQueue()).toBe(2)
})
