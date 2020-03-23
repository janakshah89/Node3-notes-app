// Original data in test.json file ===> {"name":"Andrew","planet":"Earth","age":27}

// Load & pare the JSON data : 
// Change the name & age property in your info
// Stringify the changed object & override the original data
// Test by viewing the JSON file



const fs = require('fs')

const dataBuffer = fs.readFileSync('./test.json')
const data = JSON.parse(dataBuffer.toString());

data.name = 'janak'
data.age=30
const strData = JSON.stringify(data)
console.log(strData)

fs.writeFileSync('./test.json', strData)
