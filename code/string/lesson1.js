// 常规解法
export default (str) => {
  // 1.字符串按空格分隔
  // 2.对字符串进行遍历，然后每个元素反转，但是map返回的是数组，故最后返回值要再用一次join
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

// 空格正则写法
// export default (str) => {
//   // 1.字符串按空格分隔
//   // 2.对字符串进行遍历，然后每个元素反转，但是map返回的是数组，故最后返回值要再用一次join
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//   // 1.字符串按空格分隔
//   // 2.对字符串进行遍历，然后每个元素反转，但是map返回的是数组，故最后返回值要再用一次join
//   // 正则说明：[]表示可选项 + 表示大于1次 \w 指任何单词 /g 全局匹配
//   // 但实际上该解法不严谨，若测试用例出现其他符号则不通过
//   if (str === '') {
//     return ''
//   }
//   return str.match(/[\w']+/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }
