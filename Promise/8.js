// Promise.any
// vs Promise.all

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

Promise.any([
  resolveP(100),
  rejectP(200)
])
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err.message)
})