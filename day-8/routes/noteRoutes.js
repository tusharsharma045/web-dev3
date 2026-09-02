const express = require('express');
const {getAllNotes, createNote} = require('../controllers/notescontroller');

const router = express.Router();

router.get('/', getAllNotes);
router.post('/',createNote);

module.exports = router;