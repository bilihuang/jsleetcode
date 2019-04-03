// 选择排序
export default (arr) => {
  for (let i = 0, min; i < arr.length; i++) {
    min = arr[i]
    for (let j = i + 1, tmp; j < arr.length; j++) {
      if (arr[j] < min) {
        tmp = min
        min = arr[j]
        arr[j] = tmp
      }
    }
    arr[i] = min
  }
  return arr
}
