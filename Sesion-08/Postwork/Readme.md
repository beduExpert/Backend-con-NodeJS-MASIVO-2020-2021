# POSTWORK

### OBJETIVO

* Despliegue en Heroku

## Sesión 08

* Enlace dinámico de puertos

Heroku nos va a decir qué puerto va a utilizar nuestra aplicación, así que tenemos que asegurarnos de que ese es el puerto en el que estamos escuchando. Para ello, vamos a utilizar las variables de entorno:

```javascript
// index.js

const PORT = process.env.PORT || 5000;
app.listen(PORT);
```

Básicamente, lo que quiere decir este código es que, si existe la variable de entorno `PORT`, utilízala, si no, utiliza el puerto  `5000`.

* Especificar la versión de Node.js utilizada

Tenemos que decirle a Heroku qué versiones de Node.js y npm estamos utilizando en la aplicación. Para ello, añadimos esto en el archivo `package.json`:

```json
...
"engines": {
  "node": "8.11.3",
  "npm": "6.4.1"
},
...
```
* Especificar script de arranque

Además, tenemos que darle a Heroku las instrucciones necesarias para arrancar la aplicación. Para ello, añadimos esto en el archivo package.json:

```json
...
"scripts": {
  "start": "node index.js"
},
...
```

* Crear un archivo `.gitignore`

(Esto probablemente ya lo hayas hecho si ya subiste tu código a un repositorio Git).

Simplemente, nos aseguramos de que las dependencias del proyecto no están siendo rastreadas por Git.

`/node_modules`

**Primer despliegue**

Ahora vamos a ver qué es lo que tenemos que hacer la primera vez que vayamos a desplegar la aplicación.

* **Crear una cuenta en Heroku**

Lo primero que tenemos que hacer es crearnos una cuenta en [Heroku](https://heroku.com/).

* **Crear un repositorio Git**

Sigue los siguiente pasos:

```bash
git init
git add .
git commit -m "Initial commit"
```

* **Instalar Heroku CLI y crear una nueva aplicación**

Instalamos [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). Una vez instalado, comprueba que todo haya salido bien mirando la versión instalada:

`$ heroku -v`

`heroku/7.18.3 darwin-x64 node-v10.12.0`

* Ahora tenemos que loguearnos en Heroku para poder crear una nueva aplicación:

`heroku login`

* Una vez estemos dentro, creamos la aplicación:

```bash
$ heroku create
Creating app... done, ⬢ salty-scrubland-60597
https://salty-scrubland-60597.herokuapp.com/
```

* El resultado de ese comando nos va a dar dos URLs. La primera es la URL de nuestra aplicación, y la segunda el repositorio Git donde tenemos que subir el código para desplegar la app.

* Desplegar la aplicación con Heroku CLI

Añadimos el repositorio remoto de Heroku a nuestro repositorio local:

```bash
git remote add heroku 
```

**Nota:**

***Remote Heroku already exists***

**Si te aparece un mensaje del tipo: fatal: remote heroku already exists, es porque Git ya añadió el repositorio remoto automáticamente cuando metiste el comando heroku create.**

Después, hacemos un push de la rama master al repositorio heroku:

```bash
git push heroku master
```

Finalmente, si fuera necesario por si hubiera habido algún error, podemos ver los logs del servidor:

```bash
heroku logs
```

* **Desplegar la aplicación con GitHub**
Aunque ya hemos visto cómo desplegar una aplicación utilizando Heroku CLI, también es posible conectarse con GitHub para que la aplicación se despliegue automáticamente cada vez que hacemos un push a GitHub.

Para ello, tendremos que modificar el `Deployment method` dentro de los ajustes de nuestra app en [Heroku](https://www.heroku.com/).

