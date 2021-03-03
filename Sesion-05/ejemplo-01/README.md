# Ejemplo 1

### Objetivo
Crear una aplicación con Express.

### Requerimientos
- Instalación de Node.js completada.

### Desarrollo
Sabemos que implementar un servidor utilizando únicamente las APIs que Node nos provee es posible, sin embargo, también te habrás dado cuenta que construirlo por tu propia cuenta puede tomarte un tiempo. Es por ello que han sido desarrolladas herramientas que nos permiten de una manera sencilla e intuitiva el iniciar un nuevo proyecto ofreciendonos lo básicamente necesario para iniciar.

Una de las herramientas más populares dentro del ecosistema de Node, es **Express**.

1. Para iniciar, lo primero que debemos hacer es crear un proyecto de Node, para ello puedes apoyarte a través del comando `npm init -y`, el cuál te generará un archivo `package.json` con una configuración por defecto, asegurate de que tu archivo se ve así:

```json
{
  "name": "code",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
> Algunas de las propiedades descritas en nuestro package.json no son necesarias por ahora, sin embargo es una forma rápida con la que puedes iniciar, recuerda que el archivo package.json es un elemento esencial dentro de un proyecto con Node.

2. Ahora que ya tenemos listo nuestro proyecto, toca el turno de instalar nuestras dependencias. Para ello utilizaremos el comando `npm` para instalar las siguientes dependencias: `express`.

```bash
npm i -S express
```
> Ahora dentro de tu archivo package.json, podrás observar que la dependencia ha sido agregada.

3. Listo! Ya tienes instalada la última versión de Express (hasta el momento en el que fue construída esta sesión la versión de express es 4.17.1). Ahora vamos a generar un archivo `app.js` donde colocaremos nuestro código.

4. Ahora vayamos a nuestro archivo `app.js` y escribamos nuestra primera aplicación:
```js
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

5. Ahora que hemos escrito nuestra primera aplicación en Express, es momento de echarla a andar. Desde nuestra terminal usaremos el comando `node` para ejecutar nuestro proyecto.
```bash
node app.js
```
> Para que este comando funcione adecuadamente, recuerda verificar que te encuentres en el directorio donde se encuentre el archivo `app.js` y sus dependencias, de lo contrario fallará.

Si todo ha ido como hemos previsto, podrás ver en tu terminal el mensaje `Express on port 3001`, esto significa que nuestra aplicación esta funcionando.

```bash
$ node app.js
Express on port 3001
```

Hasta ahora nuestro proyecto funciona adecuadamente, sin embargo, cada que nosotros hagamos un cambio de nuestro código actual tendremos que reiniciar nuestro servidor de Express para poder visualizar esos cambios, de lo contrario nada cambiará. La solución a nuestro problema es `Nodemon`, una herramienta que nos permitirá observar cambios dentro de nuestros archivos y reiniciará automaticamente nuestra aplicación.

6. Vamos a instalar `nodemon` como una dependencia de desarrollo utilizando el commando:
```bash
npm i -D nodemon
```
> Recuerda que las `devDependencies` no son necesarias en un ambiente de producción a diferencia de las especificadas en `dependencies`.

7. Una vez hemos agregado `nodemon` vamos a agregar un script a nuestro `package.json` que nos permitirá ejecutar nuestra aplicación de una forma más rápida, por lo que agregaremos lo siguiente dentro de la propiedad `scripts`:
```
"dev": "nodemon app.js",
```

8. De esta manera, ahora podremos hacer uso del commando `npm run` para ejecutar el script que hemos definido:
```bash
npm run dev
```

9. Una vez que nuestro proyecto haya iniciado te darás cuenta que ahora nuestra aplicación ha sido ejecutada utilizando Nodemon.
```
> nodemon app.js

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Express on port 3001
```

Ahora cada que realices un cambio dentro de tu aplicación, `Nodemon` se encargará de reiniciarla.