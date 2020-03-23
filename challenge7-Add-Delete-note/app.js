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
    handler: function(argv) {
        // console.log('Adding a new note')
        // console.log('Note Title = ' + argv.title)
        // console.log('Note Body = ' + argv.body)
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
    handler: function(argv) {
        notes.deleteNote(argv.title)
    }
})

// Command to list all notes
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function() {
        console.log('Listing all notes')
    }
})

// Command to read a note 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Read a note')
    }
})

// console.log(yargs.argv)
yargs.parse()