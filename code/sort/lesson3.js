// 922. 按奇偶排序数组 II
export default (arr) => {
  arr.sort((a, b) => a - b)
  let res = []
  let odd = 1
  let even = 0
  arr.forEach(item => {
    if (item % 2 === 0) {
      res[even] = item
      even += 2
    } else {
      res[odd] = item
      odd += 2
    }
  })
  return res
}
