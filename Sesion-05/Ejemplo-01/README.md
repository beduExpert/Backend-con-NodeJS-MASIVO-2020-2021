# Ejemplo 1

### Objetivo
Comprender el concepto de rutas en Express y la mejor manera de establecerlas para acceder a nuestros recursos.

### Requerimientos
- Instalación de Node completada.
- Completar retos y ejemplos de la `Sesión 4`.

### Desarrollo
Dentro de Express, tenemos la posibilidad de generar rutas (paths) de una manera bastante sencilla, pero es muy importante conocer como es que estas funcionan y las mejores prácticas al momento de crearlas.

La sintaxis `(req, res) => { ... }` representa una función anonima que será ejecutada cuando llegue alguna solicitud a la ruta que hemos especificado, también se le puede llamar *handler* o *callback*.

Además, podrás observar que esta recibe dos parámetros. El primer parámetro es el `request`, el cuál contiene toda la información de la solicitud HTTP, mientras que el segundo parámetro `response`, es utilizado para definir el como la solicitud debería ser respondida.

Como puedes ver dentro de nuestro código anterior, tenemos definidas unas rutas para recibir solicitudes de tipo GET. La primera en nuestra ruta principal, la cuál cuando sea llamada mostrará en el cliente una página en HTML con el mensaje `Welcome to Express`.
```js
// Creating a first route
app.get('/', (req, res) => {
  return res.send('<h1>Welcome to Express</h1>');
});
```

Mientras que en nuestra segunda ruta, podemos ver que resolvemos la solicitud utilizando el método `json` disponible dentro del objeto `response`, de esta forma Express automáticamente le indicará al cliente el tipo de contenido y como deberá interpretarlo, en este caso `JSON`.
```js
// Creating a second route
app.get('/api/notes', (req, res) => {
  return res.json(notes);
});
```

#### Probando nuestra aplicación
Ahora con nuestro servidor que hemos creado dentro en el ejemplo pasado, sabemos que se encuentra escuchando en el puerto `3001`. Por lo tanto, podemos dirigirnos a nuestro navegador web e inspeccionar su funcionamiento, para eso vamos a ir a `http://localhost:3001/` y podremos ver el mensaje `Welcome to Express`.

> Si ves un error dentro de tu navegador web, seguramente no haz iniciado el servidor, para iniciarlo utiliza el comando `npm run dev`.

Nuestro siguiente paso es crear el esqueleto de nuestra aplicación para notas, declarando las rutas para creación, listado, actualización y eliminación (CRUD).

1. Vamos a generar el directorio donde definiremos todos nuestros `handlers`, para ello crearemos un directorio de nombre `routes`.
```
mkdir routes
```

2. Ahora, dentro del directorio `routes`, vamos a agregar un archivo inicial `index.js` donde haremos la definición de las rutas asignadas a sus `handlers`. Para esto, utilizaremos el enrutador de Express que ya viene dentro de nuestra dependencia.
```js
const express = require('express');
const router = express.Router();

// router.use(path, handler)

module.exports = router;
```

3. Una vez definido nuestro `router`, crearemos otro archivo llamado `notes.js`, donde definiremos cada una de nuestras rutas para el recurso `notes`.
```js
const express = require('express')
const router = express.Router();

let notes = [
  {
    id: 1,
    title: 'Dummy',
    content: 'Nota dummy'
  }
]
// GET -> Obtener notas
router.get('/', (request, response) => {
  response.send(notes) 
  // response.json(notes)
})
// POST -> Añadir nota
router.post('/', (request,response) => {
  notes.push(request.body)
  response.send(`Nota ${request.body.id} agregada`)
})
// PATCH -> Editar nota
router.patch('/', (request,response) => {
  notes[request.body.id - 1] = request.body
  response.send(`Nota ${request.body.id} modificada`)
})
// DELETE -> Eliminar nota
router.delete('/', (request,response) => {
  notes = notes.filter(note => note.id !== request.body.id)
  response.send(`Nota ${request.body.id} eliminada`)
})

module.exports = router;
```

Como podrás darte cuenta, en las rutas `put` y `delete` tenemos una definición utilizando el caracter `:`, de esta manera, es como le indicamos a Express que vamos a recibir un parámetro y así poder identificar un elemento/recurso, en este caso, basado en su identificador (`:id`).

4. Ahora, agregaremos nuestras rutas a nuestro enrutador indicandole como deberá resolver nuestros recursos.
```js
const express = require('express');
const router = express.Router();

// Adding routes handlers to 'notes' path
router.use('/notes', require('./notes'));

module.exports = router;
```

6. Ahora que hemos asignado nuestros `handlers` al path adecuado, es momento de modificar nuestro archivo `app.js` para adaptarlo a las nuevas necesidades.
```js
const express = require('express');
const app = express(); // Creating an Express application 

app.use(express.json())

// A port where our application will be mounted
const APP_PORT = 3001;

// Getting routes definitions
app.use('/api', require('./routes'));

// Mounting express application on specific port 
app.listen(APP_PORT, () => {
  console.log(`Express on port ${APP_PORT}`);
});
```

7. Para verificar nuestra aplicación esta funcionando adecuadamente, vamos a iniciar nuestro servidor nuevamente con el comando `npm run dev`, y dentro de nuestro navegador colocaremos `http://localhost:3001/api/notes` y podremos visualizar nuestras notas.

```json
[{"id":1,"title":"Dummy Note","content":"This is a dummy note"}]
```

En la siguiente sesión, conectaremos nuestra aplicación a una base de datos.

<br/>

[Siguiente reto 01](../reto-01/README.md)