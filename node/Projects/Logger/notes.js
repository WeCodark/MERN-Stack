const fs = require('fs')
const path = require('path')
const logEvent = require('./logger')

const notesFilePath = path.join(__dirname,'data','notes.txt')

//create -> dir if not present
const dataDir = path.join(__dirname,'data');
if (!fs.existsSync(dataDir)){
    fs.mkdirSync(dataDir)
}

// add -> note
function addNote(note){
    fs.appendFile(notesFilePath, note + '\n', (err)=>{
        if (err) throw err;
        console.log('Note Added')
        logEvent('Note Added: '+note)
    })
}

// read all the notes from the file
function listNotes(){
    fs.readFile(notesFilePath,'utf-8',(err,data)=>{
        if (err){
            console.log('No notes found')
        }
        else{
            console.log('Your Notes:')
            console.log(data);
            logEvent('Listed all notes')
        }
    })
}

// delete all notes
function deleteNotes(){
    fs.unlink(notesFilePath,(err)=>{
        if (err) {
            console.log('No notes to delete')
        } else {
            console.log('All notes deleted')
            logEvent('Deleted all notes')
        }
    })
}

// delete particular note
function deleteOneNote(noteToDelete){
    if (!fs.existsSync(notesFilePath)){
        console.log('No notes to delete')
        return;
    }
    fs.readFile(notesFilePath,'utf-8',(err,data)=>{
        if (err) throw err;
        const allNotes = data.split('\n').filter(n => n.trim() !== '');
        const filteredNotes = allNotes.filter(note => note.trim() !== noteToDelete.trim())

        if (allNotes.length === filteredNotes.length){
            console.log('Note not found, Nothing deleted')
        } else {
            fs.writeFile(notesFilePath,filteredNotes.join('\n') + '\n', (err)=>{
                if (err) throw err;
                console.log(`deleted note: ${noteToDelete}`)
                logEvent('Deleted Note: ' + noteToDelete)
            })
        }
    })
}

module.exports = {
    addNote,
    listNotes,
    deleteNotes,
    deleteOneNote
}