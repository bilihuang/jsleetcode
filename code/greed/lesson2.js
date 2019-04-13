export default (bills) => {
  // 钱箱
  let hand = []
  while (bills.length) {
    let money = bills.shift()
    if (money === 5) {
      hand.push(money)
    } else {
      hand.sort((a, b) => b - a)
      let change = money - 5
      for (let i = 0, len = hand.length; i < len; i++) {
        if (hand[i] <= change) {
          change -= hand[i]
          hand.splice(i, 1)
          i--
        }
        if (change === 0) {
          break
        }
      }
      if (change !== 0) {
        return false
      } else {
        hand.push(money)
      }
    }
  }
  return true
}
