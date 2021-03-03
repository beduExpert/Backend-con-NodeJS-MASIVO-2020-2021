const express = require('express');
const app = express(); // Creating an Express application 

// A port where our application will be mounted
const APP_PORT = 3001;

// Dummy data
const notes = [
  {
    id: 1,
    title: 'Dummy Note',
    content: 'This is a dummy note',
  },
];

// Creating a first route
app.get('/', (req, res) => {
  return res.send('<h1>Welcome to Express</h1>');
});

// Creating a second route
app.get('/api/notes', (req, res) => {
  return res.json(notes);
});

// Mounting express application on specific port 
app.listen(APP_PORT, () => {
  console.log(`Express on port ${APP_PORT}`);
});