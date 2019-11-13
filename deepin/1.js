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

// function getUserIdByTokenP(token) {
//     return new P (resolve => {
//         getUserIdByToken(token, resolve)
//     })
// }
// function getUserEmailByUserIdP(userId) {
//     return new P (resolve => {
//         getUserEmailByUserId(userId, resolve)
//     })
// }


function P(fn) {
    const self = this
    this.callbacks = []
    this.status = 'pending'
    this.result = void 0
    this.handleThen = handleThen
    fn(resolve)

    function resolve (data) {
        if (data instanceof P) {
            data.then(resolve)
        } else {
            self.result = data
            self.status = 'resolved'
            handleThen()
        }
    }
    
    function handleThen() {
        if (self.status === 'resolved') {
            self.callbacks.forEach(([resolve, fn]) => {
                resolve(fn(self.result))
            })
            self.callbacks = []
        }
    }

}

P.prototype.then = function(fn) {
    const self = this
    return new P(resolve => {
        self.callbacks.push([resolve, fn])
        self.handleThen()
    })
}

function getUserEmailByToken(token) {

    new P(resolve => {
        getUserIdByToken(token, resolve)
    }).then(userId => {
        return new P(resolve => {
            getUserEmailByUserId(userId, resolve)
        })
    }).then(userEmail => {
        console.log(userEmail)
    })

    // getUserIdByTokenP(token)
    // .then(userId => {
    //     return getUserEmailByUserIdP(userId)
    // })
    // .then(userEmail => {
    //     console.log(userEmail)
    // })
}

getUserEmailByToken('1xxx')