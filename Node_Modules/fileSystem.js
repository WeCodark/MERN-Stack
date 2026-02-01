// Importing File System module to work with files
const fs = require('fs')

// Importing helper function to work with file URLs (not used here, but good to know)
const { fileURLToPath } = require('url')

/* -------------------- Reading File (Async) -------------------- */
// Async method is non-blocking, rest of the code can run
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log('Async Read Data:')
    console.log(data)
})

/* -------------------- Reading File (Sync) -------------------- */
// Sync method blocks execution until file is fully read
let value = fs.readFileSync('data.txt', 'utf-8')
console.log('Sync Read Data:')
console.log(value)

/* -------------------- Writing File -------------------- */
// writeFile will overwrite existing content if file already exists
fs.writeFile(
    'data.txt',
    'I want to update that we are going to learn React JS',
    (err) => {
        if (err) throw err
        console.log('File has been updated successfully')
    }
)

/* -------------------- Appending File -------------------- */
// appendFile adds data at the end of file, old data remains safe
fs.appendFile(
    'data.txt',
    '\nHey, this is a new line added to the file.',
    (err) => {
        if (err) throw err
        console.log('Data appended successfully')
    }
)

/* -------------------- Deleting File -------------------- */
// unlink is used to delete the file permanently
fs.unlink('data.txt', (err) => {
    if (err) throw err
    console.log('File deleted successfully')
})
