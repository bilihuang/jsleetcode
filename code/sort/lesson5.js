// 数组中的第K个最大元素

export default (arr, k) => {
  let len = arr.length - 1
  for (let i = len; i > len - k; i--) {
    for (let j = 0, tmp; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr[len - (k - 1)]
}
