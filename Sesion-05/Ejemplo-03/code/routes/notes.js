const express = require('express');
const router = express.Router();
const sequelize = require('../database'); // Using database config

// Handler for list all notes
router.get('/', async (req, res) => {
  const notes = await sequelize.models.Notes.findAll(); // Getting all notes in database
  return res.json(notes);
});

// Handler for create a new note
router.post('/',  async (req, res) => {
  const { body } = req; // Getting data from request 
  const Note = await sequelize.models.Notes.create({
    heading: body.heading,
    content: body.content,
  }); // Creating an instance of Notes
  Note.save(); // Saving model in database
  return res.json({ message: 'Created successfully', data: Note });
});

// Handler for update a specific note
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req; // Getting id from parameters
  const Note = await sequelize.models.Notes.findOne({ id }) // Finding specific noted based on id
  if (!Note) {
    return res.status(404).json({ message: 'Note not found'});
  }
  // The new model with request changes
  const UpdatedNote = await Note.update({
    heading: body.heading,
    content: body.content,
  });
  return res.json({ message: 'Updated successfully', data: UpdatedNote });
});

// Handler for delete a specific note
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req; // Getting id from parameters
  const Note = await sequelize.models.Notes.findOne({ id }) // Finding specific noted based on id
  if (!Note) {
    return res.status(404).json({ message: 'Note not found'});
  }
  await Note.destroy(); // Destroying resource
  return res.json({ message: 'Deleted successfully' });
});

module.exports = router;