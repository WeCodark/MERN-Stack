const path = require('path')

const fileName = path.join(__dirname,'data','data.txt')

console.log(fileName)

console.log(path.basename(fileName))
console.log(path.dirname(fileName))
console.log(path.extname(fileName))

