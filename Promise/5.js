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

Promise.all([
  resolveP(100),
  resolveP(300),
  resolveP(200)
]).then(res => {
  console.log(res);
});

// Promise.all([
//   resolveP(100),
//   resolveP(300),
//   rejectP(200)
// ])
// .then(res => {
//   console.log('then', res)
// })
// .catch(res => {
//   console.log('catch', res)
// })
