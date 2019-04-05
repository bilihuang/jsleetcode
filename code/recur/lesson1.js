// 93. 复原IP地址
export default (str) => {
  let res = []
  // 递归函数
  let search = (cur, sub) => {
    if (cur.length === 4 && cur.join('') === str) {
      res.push(cur.join('.'))
    } else if (cur.length < 4) { // 大于四个就跳出
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        tmp = sub.substr(0, i + 1)
        // 只可单个0，不可0开头
        if ((tmp.indexOf('0') !== 0 && tmp < 256) || tmp === '0') {
          search(cur.concat([tmp]), sub.substr(i + 1))
        }
      }
    }
  }
  search([], str)
  return res
}
