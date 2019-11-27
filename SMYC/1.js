// 实现一个 timeout 5s 的请求

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

function fetchData(promise) {
  // return Promise.race([
  //   promise,
  //   new Promise((_, reject) => {
  //     setTimeout(() => reject(new Error('timeout')), 5000)
  //   })
  // ])

  // return new Promise((resolve, reject) => {
  //   promise.then(resolve).catch(reject)
  //   setTimeout(() => {
  //     reject(new Error('timeout'))
  //   }, 5000)
  // })

  return new Promise((resolve,reject) => {
        promise.then( (res) => {
            resolve(res)
        }).catch( err => {
            reject(err)
        })
        setTimeout(() => {
             reject(new Error('timeout'))
        }, 5000)
      })
}

fetchData(resolveP(100))
.then(data => {
  console.log('1', 'then', data) // 1 then 100
})
.catch(err => {
  console.log('1', 'catch', err.message)
})

fetchData(resolveP(6000))
.then(data => {
  console.log('2', 'then', data)
})
.catch(err => {
  console.log('2', 'catch', err.message) // 2 catch timeout
})

fetchData(rejectP(100))
.then(data => {
  console.log('3', 'then', data)
})
.catch(err => {
  console.log('3', 'catch', err.message) // 3 catch 100
})