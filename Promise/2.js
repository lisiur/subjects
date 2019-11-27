new Promise(resolve => {
  resolve(1)
}).then(data => {
  console.log(data)
}).then(data => {
  console.log(data)
})

new Promise(resolve => {
  resolve(
    new Promise(resolve2 => {
      resolve2(2)
    })
  )
}).then(data => {
  console.log(data)
})