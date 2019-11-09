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

function getUserEmailByToken(token) {
    getUserIdByToken(token, function(userId) {
        getUserEmailByUserId(userId, function(userEmail) {
            console.log(userEmail)
        })
    })
}

getUserEmailByToken('1xxx')
