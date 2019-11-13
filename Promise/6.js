// Promise.race

function resolveP(n) {
  return new Promise(resolve => {
    setTimeout(() => resolve(n), n);
  });
}

function rejectP(n) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(n)), n);
  });
}

Promise.race([
  resolveP(100),
  resolveP(200),
  resolveP(300),
])
.then(data => {
  console.log(data)
})

// Promise.race([
//   rejectP(500),
//   resolveP(200),
//   resolveP(300),
// ])
// .then(data => {
//   console.log('then', data)
// })
// .catch(err => {
//   console.log('catch', err.message)
// })