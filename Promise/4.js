new Promise((resolve, reject) => {
  resolve(1)
})
.finally(() => {
  console.log('finally')
})