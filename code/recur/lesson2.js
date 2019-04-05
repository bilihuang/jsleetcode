export default (str, words) => {
  let res = []
  // 记录数组的长度，做边界条件计算
  let num = words.length
  let range = (r, arr) => {
    if (r.length === num) {
      res.push(r)
    } else {
      arr.forEach((item, idx) => {
        // 复制数组后去除当前项
        let tmp = [].concat(arr)
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      })
    }
  }
  range([], words)
  return res.map(item => {
    return str.indexOf(item.join(''))
  }).filter(item => item !== -1).sort()
}
