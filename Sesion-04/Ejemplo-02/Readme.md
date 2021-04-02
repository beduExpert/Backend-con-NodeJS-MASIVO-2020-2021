# Ejemplo 02

## Objetivo

Crear un servidor en Express JS.

## Desarrollo

* Crea un proyecto de **npm** ejecutando el comando `npm init` o `npm init -y`.

* Instala el módulo de _express_ con el comando `npm install express`. Verifica que el modulo haya sido agregado en el archivo `package.json`.

* Abre tu editor de texto favorito y crea un archivo llamado `index.js`.

* Ingresa el siguiente código:

```javascript
const express = require('express');

const app = express();

app.get('/', function (request, response) {
  response.send('Hello World');
});

app.listen(8080);
```

* Ejecuta el código con el comando `node index.js`.

* Ingresa en tu navegador a `localhost:8080`. Verás la palabra `Hello World` en pantalla.