const p1 = new Promise(resolve => {
  resolve(1)
})

const p2 = p1.then(data => {
  return data + 1
})

const p3 = p2.then(data => {
  console.log(data) // data 是什么？
})
