const fs = require('fs')
const chalk = require('chalk')

const addNote = (_title, _body) => {
    const notesArr = loadNotes()
    const duplicateArr = notesArr.filter((note) => note.title === _title)

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

const saveNotes = (allNotes) => {
    fs.writeFileSync('./notes.json', JSON.stringify(allNotes))
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson) 
    } catch(e) {
        return []
    }
}

const deleteNote = (_title) => {
    const notesArr = loadNotes()
    const updatedNotes = notesArr.filter((notes) => notes.title !== _title)

    if(notesArr.length === updatedNotes.length) {
        console.log(chalk.bgRed('No such Note was found'))
    } else {
        console.log(chalk.bgGreen('Note Removed successfully'))
        saveNotes(updatedNotes)
    }
}

module.exports = {
    getNotes: loadNotes,
    addNote: addNote,
    deleteNote: deleteNote
}
