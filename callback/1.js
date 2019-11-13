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

function getUserEmailByToken(token, callback) {
    getUserIdByToken(token, function(userId) {
        getUserEmailByUserId(userId, function(userEmail) {
            callback(userEmail)
        })
    })
}

getUserEmailByToken('1xxx', function (userEmail) {
    console.log(userEmail) // 1@mail.com
})

getUserEmailByToken('2xxx', function (userEmail) {
    console.log(userEmail) // 2@mail.com
})
