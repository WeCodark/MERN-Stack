const fs = require('fs')
const path = require('path')

const logPath = path.join(__dirname,'data','log.txt')

function logEvent(message){
    const timestamp = new Date().toISOString()
    fs.appendFile(logPath,`${timestamp} - ${message}\n`,(err)=>{
        if (err) throw err;
    })
}

module.exports = logEvent