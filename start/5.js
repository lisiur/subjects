const p1 = new Promise(resolve => {
  resolve(new Promise(resolve2 => {
    resolve2(1)
  }))
})

const p2 = p1.then(data => {
  console.log(data) // data 是什么？
})
