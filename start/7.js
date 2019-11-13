const p1 = new Promise(resolve => {
  resolve(1)
})

const p2 = p1.then(data => {
  new Promise(resolve => {
    resolve(2)
  })
})

const p3 = p2.then(data => {
  console.log(data) // 输出什么？
})
