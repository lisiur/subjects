function getUserIdByToken(token, callback) {
  setTimeout(() => {
      const userId = token[0]
      callback(userId)
  }, 1000)
}

function getUserEmailByUserId(userId, callback) {
  setTimeout(() => {
      const userEmail = `${userId}@mail.com`
      callback(userEmail)
  }, 1000)
}

function getUserIdByTokenP(token) {
    return new Promise (resolve => {
        getUserIdByToken(token, resolve)
    })
}

function getUserEmailByUserIdP(userId) {
    return new Promise (resolve => {
        getUserEmailByUserId(userId, resolve)
    })
}

function getUserEmailByTokenP(token) {
  return getUserIdByTokenP(token)
  .then(userId => {
    return getUserEmailByUserIdP(userId)
  })
}

getUserEmailByTokenP('2xxx')
.then(email => {
  console.log(email)
})

// async function getUserEmailByToken(token) {
//   const userId = await getUserIdByTokenP(token)
//   const userEmail = await getUserEmailByUserIdP(userId)
//   return userEmail
// }

// getUserEmailByToken('1xxx')
// .then(email => {
//   console.log(email)
// })
