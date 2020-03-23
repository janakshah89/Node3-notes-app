const fs = require('fs')
const chalk = require('chalk')

const addNote = (_title, _body) => {
    const notesArr = loadNotes()
    // const duplicateArr = notesArr.filter((note) => note.title === _title)
    const duplicateFound = notesArr.find((note) => note.title === _title)

    if(duplicateFound) {
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

const listNotes = () => {
    const notesArr = loadNotes()
    
    if(notesArr.length) {
        console.log(chalk.yellow('List of notes: '))
        console.log(chalk.yellow('-------------------'))
        notesArr.forEach((data, index)=>{
            console.log(chalk.yellow((index+1) + '. ' + data.title))
        })
    } else {
        console.log(chalk.yellow('No notes to display'))
    }
}

const readNote = (title) => {
    const notesArr = loadNotes()

    noteFound = notesArr.find((note) => note.title === title)
    if(noteFound) {
        console.log(chalk.yellow("~~~~~~~~~~~~~~~~~"))
        console.log(chalk.cyan.bold("Title: " + noteFound.title))
        console.log(chalk.yellow("-------------------------------"))
        console.log(chalk.red(noteFound.body))
        console.log(chalk.yellow("-------------------------------"))
    } else {
        console.log(chalk.bgRed.white("No such note found, Please check the title again"))
    }
}

module.exports = {
    getNotes: loadNotes,
    addNote: addNote,
    deleteNote: deleteNote,
    listNotes: listNotes,
    readNote: readNote
}
