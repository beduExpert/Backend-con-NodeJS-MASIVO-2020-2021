# Ejemplo #1
### Objetivo
La seguridad es un punto importante hoy en día, ya que muchas empresas se han visto comprometidas debido a la falta de importancia que se le da a la seguridad de sus aplicaciones. Actualmente, uno de los ataques más ejecutados hacía servicios web es la Denegación de Servicio o también conocido como **DDoS**. Es por ello, que debemos ser cuidadosos en como protegemos nuestro API para evitar que la continuidad de nuestros servicios se vea comprometida.

Para cubrir algunos de los elementos básicos de seguridad de un servicio web, utilizaremos un paquete para Express llamada **Helmet**.

Helmet es un *middleware* con un set de HTTP Headers para proteger nuestra aplicación, contra Sniffers, ataques XSS, protecciones a través de políticas y controles de DNS, entre otras.

También, haremos una protección utilizando **CORS** (Cross-origin resource sharing), con el cuál indicaremos los origenes permitidos para acceder a nuestros recursos desde un servidor, en un origen distinto (dominio) al que pertenece.

### Desarrollo
1. Lo primero que debemos hacer es instalar nuestras nuevas dependencias a través del comando `npm`.
```bash
npm i -S helmet cors
```

2. Una vez que hayan sido instaladas, vamos a abrir nuestro archivo `app.js` y agregaremos la configuración necesaria para `helmet`.
```js
const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet()); // Basic configuration

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(3001, () => {
  console.log(`Express on port 3001`);
});
```

Además, `helmet` nos da la facilidad de personalizar las configuraciones de cada una de las protecciones que se han aplicado e incluso aplicar de manera individual cada una de ellas para una mejor gestión.

> Puedes ver más información sobre Helmet aquí: https://helmetjs.github.io/.

3. Ahora, toca el turno de configurar el paquete CORS.
```js
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet()); // Basic configuration for helmet
app.use(cors()) // Basic configuration for enable CORS

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(3001, () => {
  console.log(`Express on port 3001`);
});
```

> Puedes saber más al respecto sobre su implementación aquí: https://expressjs.com/en/resources/middleware/cors.html.

<br/>

[Siguiente Ejemplo 01](../Ejemplo-02/Readme.md)