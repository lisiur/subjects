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


function P(fn) {
    this.callbacks = []
    this.status = 'pending'
    this.result = void 0

    this.handleThen = function() {
        if (this.status === 'resolved') {
            this.callbacks.forEach(cb => {
                cb(this.result)
            })
        }
    }

    fn(resolve)

    function resolve (data) {
        this.result = data
        this.status = 'resolved'
        handleThen()
    }

    
}
P.prototype.then = function(fn) {
    this.callbacks.push(fn)
    this.handleThen()
}

function getUserEmailByToken(token) {
    const p = new P(resolve => {
        getUserIdByToken(token, resolve)
    }).then(data => {
        console.log(data)
    })
}

getUserEmailByToken('1xxx')