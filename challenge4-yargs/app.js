
// const data = require('./notes.js')
const yargs = require('yargs')

// Command to add a new note 
yargs.command({
    command: 'add',
    describe: 'Add a note',
    handler: function() {
        console.log('Adding a new note')
    }
})

// Command to remove a new note 
yargs.command({
    command: 'remove',
    describe: 'Aemove a note',
    handler: function() {
        console.log('Removing a new note')
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

console.log(yargs.argv)