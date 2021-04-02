# Ejemplo 3

## Objetivo

Comprender el impacto que tienen los encabezados de HTTP en el procesamiento del navegador.

## Desarrollo

* Crea un proyecto de **npm** ejecutando el comando `npm init` o `npm init -y`.

* Instala el módulo de _express_ con el comando `npm install express`. Verifica que el modulo haya sido agregado en el archivo `package.json`.

* Abre tu editor de texto favorito y crea un archivo llamado `index.js`.

* Ingresa el siguiente código:

```javascript
const express = require('express');

const app = express();

app.get('/', function (request, response) {
  response.send('<h1>Hello World</h1>');
});

app.listen(8080);
```

* Ejecuta el código con el comando `node index.js`.

* Ingresa en tu navegador a `localhost:8080`. Verás la palabra `Hello World` en negritas en pantalla.

* Ahora agrega la siguiente línea de código antes de enviar la respuesta al cliente:

```javascript
response.set('Content-Type', 'text/plain');
```

* En la terminal presiona `ctrl` + `c` para terminar el proceso actual de Node.js y vuelve a ejecutar el programa con `node index.js`.

* En el navegador vuelve a ingresar a `localhost:8080`. Verás que ahora aparecerá el texto `<h1>Hello World</h1>`.

* ¿Qué es lo que hizo el encabezado **Content-Type**?