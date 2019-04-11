// 48. 旋转图像
export default (arr) => {
  let vecor = arr.length
  // 以中间行为轴，上下对称翻转
  for (let i = 0, len = vecor / 2, tmp; i < len; i++) {
    tmp = arr[i]
    arr[i] = arr[vecor - i - 1]
    arr[vecor - i - 1] = tmp
  }
  // 转置
  for (let i = 0; i < vecor; i++) {
    for (let j = 0, tmp; j < i; j++) {
      tmp = arr[j][i]
      arr[j][i] = arr[i][j]
      arr[i][j] = tmp
    }
  }
  return arr
}
