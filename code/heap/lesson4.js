// 313. 超级丑数
class Ugly {
  constructor (n, primes) {
    this.n = n
    this.primes = new Heap(primes)
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
        if (!primes.find(arr[k])) {
          break
        }
      }
      // k===l有两种情况，一种是当前这个数没有质因数，一种是所有质因数都在指定列表中
      if (k === l) {
        if (l === 0) {
          if (primes.find(i)) {
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

class Heap {
  constructor (arr) {
    this.data = arr
    this.max = arr.length
    this.sort()
  }
  sort () {
    let iArr = this.data
    let n = iArr.length
    if (n <= 1) {
      return iArr
    } else {
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n)
      }
      return iArr
    }
  }
  find (val, i = 0) {
    let arr = this.data
    if (val > arr[i] || i > this.max) {
      return false
    } else if (val === arr[i]) {
      return val
    } else {
      return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2)
    }
  }
  static swap (arr, a, b) {
    if (a === b) {
      return
    }
    let c = arr[a]
    arr[a] = arr[b]
    arr[b] = c
  }
  // 构建最大堆
  static maxHeapify (arr, i, size) {
    // 左节点
    let l = i * 2 + 1
    // 右节点
    let r = i * 2 + 2
    let largest = i
    if (l <= size && arr[l] > arr[largest]) {
      largest = l
    }
    if (r <= size && arr[l] < arr[largest]) {
      largest = r
    }
    if (largest !== i) {
      Heap.swap(arr, i, largest)
      // 递归构建子树最大堆
      Heap.maxHeapify(arr, largest, size)
    }
  }
}
export { Heap, Ugly }
