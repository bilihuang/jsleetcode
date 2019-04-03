// 164.最大间距
export default (arr) => {
  if (arr.length < 2) {
    return 0
  }
  let max = 0
  let len = arr.length - 1
  let space
  for (let i = len, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j]
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
    if (i < len) {
      space = arr[i + 1] - arr[i]
    }
    if (space > max) {
      max = space
    }
  }
  return Math.max(max, arr[1] - arr[0])
}
