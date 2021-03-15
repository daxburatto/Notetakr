const router = require('express').Router()
const db = require('../../db/db.json')
const { saveNote, findById, deleteNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(notes)
})

module.exports = router