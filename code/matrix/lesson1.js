// 54. 螺旋矩阵
export default (arr) => {
  // 处理每一圈数据遍历过程
  let map = (arr, r = []) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i === 0) {
        r = r.concat(arr[i])
      } else if (i === len - 1) {
        r = r.concat(arr[i].reverse())
      } else {
        r.push(arr[i].pop())
      }
    }
    arr.shift()
    arr.pop()
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].length !== 0) {
        r.push(arr[i].shift())
        if (arr[i].length === 0) {
          arr.pop()
        }
      } else {
        arr.pop()
      }
    }
    if (arr.length) {
      return map(arr, r)
    } else {
      return r
    }
  }
  return map(arr, [])
}
