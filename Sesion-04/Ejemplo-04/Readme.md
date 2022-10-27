# Ejemplo 4

## Objetivo

Crear una aplicación con Express.

## Desarrollo

Sabemos que implementar un servidor utilizando únicamente las APIs que Node nos provee es posible, sin embargo, también te habrás dado cuenta que construirlo por tu propia cuenta puede tomarte un tiempo. Es por ello que han sido desarrolladas herramientas que nos permiten de una manera sencilla e intuitiva el iniciar un nuevo proyecto ofreciendonos lo básicamente necesario para iniciar.

* Una de las herramientas más populares dentro del ecosistema de Node, es Express.

* Abre tu editor de texto favorito y crea un archivo llamado `index.js`.

* Ingresa el siguiente código:

```javascript
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
```

* Ejecuta el código con el comando `nodemon server.js`.

* Ingresa en tu navegador a `localhost:8080`. Verás la palabra `Welcome to Express` en negritas en pantalla.

* Utilizando **Postman** o **Insomnia**