const express = require('express');
const app = express(); // Creating an Express application 

// A port where our application will be mounted
const APP_PORT = 3001;

// Configuring parsers of request content-type
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Getting routes definitions
app.use('/api', require('./routes'));

// Mounting express application on specific port 
app.listen(APP_PORT, () => {
  console.log(`Express on port ${APP_PORT}`);
});