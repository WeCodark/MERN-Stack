// Here we are printing the file extensions for all files in teh current folder using path module
const fs = require('fs');
const path = require('path')

fs.readdir(__dirname, (err,files)=>{
    if (err) throw err;

    files.forEach(file =>{
        console.log(`${file} -> ${path.extname(file)}`)
    })
})