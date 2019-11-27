import {counter1, inc1} from './es/code'
import c1 from './es/code'
const c = require('./cjs/code')
c.counter = 3
const {counter, inc} = require('./cjs/code')

c1.counter1 = 9
console.log(counter1)
inc1()
console.log(counter1)

console.log('----------')

console.log(counter)
inc()
console.log(counter)
