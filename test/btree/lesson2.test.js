import Tree from '../../code/btree/lesson'

test('Tree', () => {
  let root = new Tree([5, 1, 4, null, null, 3, 6])
  expect(Tree.walk(root)).toBe(false)
})
