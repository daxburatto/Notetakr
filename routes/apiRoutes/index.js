const router = require('express').Router()
const db = require('../../db/db.json')
const { saveNote, findById, deleteNote } = require('../../lib/notes')

router.get('/db', (req, res) => {
    res.json(db)
})

router.delete('/db/:id', (req, res) => {
    const result = findById(req.params.id, db)
    if (result) {
        deleteNote(req.params.id, db)
        res.json(db)
    } else {
        res.send(404)
    }
})

router.post('/db', (req, res) => {
    const note = saveNote(req.body, db)
    res.json(note)
})

module.exports = router