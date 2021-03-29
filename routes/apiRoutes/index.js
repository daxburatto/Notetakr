const router = require('express').Router()
const db = require('../../notes/db.json')
const { saveNote, findById, deleteNote } = require('../../lib/notes')
const { v4: uuidv4 } = require('uuid')

router.get('/notes', (req, res) => {
    res.json(db)
})

router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, db)
    if (result) {
        deleteNote(req.params.id, db)
        res.json(db)
    } else {
        res.sendStatus(404)
    }
})

router.post('/notes', (req, res) => {
    // creates a unique id for each note
    req.body.id = uuidv4()
    const note = saveNote(req.body, db)
    res.json(note)
})

module.exports = router