const express = require('express');
const router = express.Router();

// Dummy data
const notes = [
  {
    id: 1,
    title: 'Dummy Note',
    content: 'This is a dummy note',
  },
];

// Handler for list all notes
router.get('/', (req, res) => {
  return res.json(notes);
});

// Handler for create a new note
router.post('/',  (req, res) => {
  return res.json({  message: 'Created successfully' });
});

// Handler for update a specific note
router.put('/:id', (req, res) => {
  return res.json({ message: 'Updated successfully'});
});

// Handler for delete a specific note
router.delete('/:id', (req, res) => {
  return res.json({ message: 'Deleted successfully' });
});

module.exports = router;