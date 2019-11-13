new Promise((_, reject) => {
  reject(1)
})
.catch(err => {
  console.log(err)
})

new Promise((resolve) => {
  resolve()
})
.then(() => {
  throw new Error(2)
})
.catch(err => {
  console.log(err.message)
})