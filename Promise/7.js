// Promise.allSettled

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

Promise.allSettled([
  resolveP(100),
  rejectP(200),
])
.then(res => {
  console.log(res)
})