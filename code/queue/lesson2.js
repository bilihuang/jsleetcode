// 621. 任务调度器

export default (tasks, n) => {
  // 最终队列执行结果
  let q = ''
  // 对任务归类进行存储
  let Q = {}
  tasks.forEach(item => {
    if (Q[item]) {
      Q[item]++
    } else {
      Q[item] = 1
    }
  })
  while (1) {
    // 任务清单
    let keys = Object.keys(Q)
    if (!keys[0]) {
      break
    }
    // 声明一个队列用来存储1+n任务单元
    let tmp = []
    for (let i = 0; i <= n; i++) {
      let max = 0
      let key
      let pos
      keys.forEach((item, idx) => {
        if (Q[item] > max) {
          max = Q[item]
          key = item
          pos = idx
        }
      })
      if (key) {
        tmp.push(key)
        keys.splice(pos, 1)
        Q[key]--
        if (Q[key] < 1) {
          delete Q[key]
        }
      } else {
        break
      }
    }
    q += tmp.join('').padEnd(1 + n, '-')
  }
  // 边界处理,最后不要出现冷却时间
  q = q.replace(/-+$/g, '')
  return q.length
}
