const router = require('express').Router()
const db = require('../../notes/db.json')
const { saveNote, findById, deleteNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(db)
})

router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, db)
    if (result) {
        deleteNote(req.params.id, db)
        res.json(db)
    } else {
        res.send(404)
    }
})

router.post('/notes', (req, res) => {
    const note = saveNote(req.body, db)
    res.json(note)
})

module.exports = router