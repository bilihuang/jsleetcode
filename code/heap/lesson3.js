// 313. 超级丑数
class Ugly {
  constructor (n, primes) {
    this.n = n
    this.primes = primes
  }
  getAll () {
    // 超级丑数列表
    let res = [1]
    let i = 2
    let primes = this.primes
    while (res.length < this.n) {
      let arr = Ugly.getPrimes(i)
      let k = 0
      let l = arr.length
      for (; k < l; k++) {
        if (!primes.find(item => item === arr[k])) {
          break
        }
      }
      // k===l有两种情况，一种是当前这个数没有质因数，一种是所有质因数都在指定列表中
      if (k === l) {
        if (l === 0) {
          if (primes.find(item => item === i)) {
            res.push(i)
          }
        } else {
          res.push(i)
        }
      }
      i++
    }
    return res[this.n - 1]
  }
  // 计算n的质因数
  static getPrimes (n) {
    let prime = (n) => {
      // 存储所有质因数
      let arr = []
      for (let i = 2; i < n / 2; i++) {
        if (n % i === 0 && !prime(i).length) {
          arr.push(i)
        }
      }
      return arr
    }
    return prime(n)
  }
}

export default Ugly
