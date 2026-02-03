const notes = require('./notes')

const action = process.argv[2] //'add','list','delete'
const input = process.argv.slice(3).join(' ') // note content

switch (action){
    case 'add':
        if (!input){
            console.log('Please enter a note to add')
        } else{
            notes.addNote(input)
        }
        break;

    case 'list':
        notes.listNotes()
        break;

    case 'delete':
        if (!input){
            notes.deleteNotes()
        } else {
            notes.deleteOneNote(input)
        }
        break;
    default:
        console.log(`The command: ${action} is not in list`)
        console.log('To implement any task follow the bellow commands')
        console.log('node script.js add "Your Note Here"')
        console.log('node script.js list')
        console.log('node script.js delete ----> All Notes')
        console.log('node script.js delete "specific note" ')
}