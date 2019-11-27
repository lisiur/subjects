new Promise((resolve, reject) => {
  resolve(1)
})
.finally((...args) => {
  console.log(args)
  throw new Error(1)
})
.then(data => {
  console.log(1, data)
})
.catch(data => {
  console.log(2, data)
})