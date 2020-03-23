const notes = require('./notes.js')
const yargs = require('yargs')

// Command to add a new note 
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note Title',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Note body',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Command to remove a new note 
yargs.command({
    command: 'remove',
    describe: 'Aemove a note',
    builder: {
        title: {
            describe: 'Note Title To Delete',
            type: 'string',
            demandOption: true
        },
    },
    handler(argv) {
        notes.deleteNote(argv.title)
    }
})

// Command to list all notes
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        notes.listNotes()
    }
})

// Command to read a note 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Read a note by providing a title',
            type: String,
            demandOption: true
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()