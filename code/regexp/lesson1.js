// 459. 重复的子字符串
export default (str) => {
  let reg = /^(\w+)\1+$/
  return reg.test(str)
}
