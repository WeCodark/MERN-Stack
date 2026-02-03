const fs = require('fs')

const today = new Date().toLocaleString();
const message = `\n${today} - Server Started succesfully`

fs.appendFile('log.txt',message,(err)=>{
    if (err) throw err;
    console.log('log updated')
})