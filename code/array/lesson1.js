// 17. 电话号码的字母组合
export default (str) => {
  if (!str) {
    return []
  }

  // 建立电话号码键盘映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 把输入字符串按单字符分隔变成数组
  let num = str.split('')
  // 保存键盘映射后的字母内容
  let code = []
  num.forEach(item => {
    if (map[item]) {
      code.push(map[item])
    }
  })
  // 若输入字符为1个时，不用组合直接分割返回
  if (code.length === 1) {
    return code[0].split('')
  }
  let comb = (arr) => {
    // 临时变量，用来保存前两个组合的结果
    let tmp = []
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  return comb(code)
}
