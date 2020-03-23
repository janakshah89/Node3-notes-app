const fs = require('fs')
const chalk = require('chalk')

const addNote = function(_title, _body) {
    const notesArr = getNotes()

    const duplicateArr = notesArr.filter(function (note) {
        return note.title === _title
    })

    if(duplicateArr.length > 0) {
        console.log(chalk.bgWhite.red.inverse('Oops, the title have already been added'))
    } else {
        notesArr.push({
            title: _title,
            body: _body
        })
        console.log(chalk.green.inverse('Yay!, Your title has been added...'))
    }

    saveNotes(notesArr)
}

const saveNotes = function(allNotes){
    fs.writeFileSync('./notes.json', JSON.stringify(allNotes))
}

const getNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('./notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson) 
    } catch(e) {
        return []
    }
}

const deleteNote = function(_title) {
    const notesArr = getNotes()

    const updatedNotes = notesArr.filter(function (notes) {
        return notes.title !== _title
    })

    if(notesArr.length === updatedNotes.length) {
        console.log(chalk.bgRed('No such Note was found'))
    } else {
        console.log(chalk.bgGreen('Note Removed successfully'))
        saveNotes(updatedNotes)
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote
}
