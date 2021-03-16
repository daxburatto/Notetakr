const { json } = require('express')
const fs = require('fs')
const path = require('path')


function saveNote(body, notes) {  
    const note = body 
    notes.push(note)
    fs.writeFileSync(path.join(__dirname, '../notes/db.json'),
    JSON.stringify(notes, null, 2))
    
    return note
}

function findById(id, notes) {  
    const result = notes.filter(note => note.id === id)[0]
    return result
}

function deleteNote(id, notes) {  
    var removeNote = notes.map(function (item) {  
        return item.id
    }).indexOf(id)
    notes.splice(removeNote, 1)
    fs.writeFileSync(path.join(__dirname, '../notes/db.json'),
    JSON.stringify(notes, null, 2))
}

module.exports = {
    saveNote,
    findById,
    deleteNote
}