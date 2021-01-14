const router = require('express').Router();
const { filterByQuery, findById, createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../data/notes');
const { v4: uuidv4, validate } = require('uuid');

router.get('notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.get('notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
  });

router.delete('notes/:id', (req, res) => {
    const result = notes.filter(note => note.id === req.params.id)[0];
    const index = notes.indexOf(result);
    notes.splice(index, 1);
    
    deleteNote(notes);
    console.log("Note deleted.");

    res.json();
});

router.post('notes', (req, res) => {
    req.body.id = uuidv4();
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.')
    } else {
    const note = createNewNote(req.body, notes)
    res.json(note);
    }
});

module.exports  = router;