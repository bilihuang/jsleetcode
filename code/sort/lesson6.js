export default (arr) => {
  arr = arr.filter(item => item > 0)
  for (let i = 0, len = arr.length, min; i < len; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    arr[i] = min
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1
      }
    } else {
      if (min !== 1) {
        return 1
      }
    }
  }
  return arr.length ? arr.pop() + 1 : 1
  // const array = []
  // const maxSize = nums.length
  // for(let i of nums) {
  //     if (i > 0 && i <= maxSize ) {
  //         array[i] = 1
  //     }
  // }
  
  // for(let i=1; i<maxSize + 1; i++) {
  //     if (!array[i]) {
  //         return i
  //     }
  // }
  
  // return array.length ? array.length : 1
}
