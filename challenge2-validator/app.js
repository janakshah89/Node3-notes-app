const validator = require('validator')
const data = require('./notes.js')

console.log(data())
console.log(validator.isEmail('janakshah89gmail.com'))