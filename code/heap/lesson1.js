class Heap {
  constructor (data) {
    this.data = data
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
      // 一趟构建后交换根节点与最右节点，并将该节点排除，不算入下一次构建
      for (let j = 0; j < n; j++) {
        Heap.swap(iArr, 0, n - 1 - j)
        Heap.maxHeapify(iArr, 0, n - 1 - j - 1)
      }
      return iArr
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
export default Heap
