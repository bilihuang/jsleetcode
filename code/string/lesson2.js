// 696. 计数二进制子串

export default (str) => {
  let result = []
  // 给定任意字输入都返回一个符合条件的子串
  let match = (str) => {
    // match匹配字符串开头任意多个0或任意多个1
    let j = str.match(/^(0+|1+)/)[0]
    // 按位取反
    let o = (j[0] ^ 1).toString().repeat(j.length)
    // 生成RegExp对象，匹配规则为字符串开头匹配上面两个字符串连接起来的字符串
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      result.push(sub)
    }
  }
  return result
}

// 解法二 只有一层循环，算法复杂度较低
// export default (s) => {
//     // pre 前一个数字连续出现的次数，cur 当前数字连续出现的次数，result 结果子串个数
//     let pre = 0, cur = 1, result = 0
//     for (let i = 0, len = s.length - 1; i < len; i++) {
//         // 判断当前数字是否与后一个数字相同
//         if (s[i] === s[i+1]) { // 相同，则当前数字出现的次数cur加1
//             cur++
//         } else { // 不同，则当前数字事实上变成了前一个数字，当前数字的次数重置为1
//             pre = cur
//             cur = 1
//         }
//         if (pre >= cur) { // 前一个数字出现的次数 >= 后一个数字出现的次数，则一定包含满足条件的子串
//             result++
//         }
//     }
//     return result
// }
