const p1 = new Promise(resolve => {
  resolve(1)
})

const p2 = p1.then(data => {
  return data
})

console.log(p1 === p2) // 输出什么