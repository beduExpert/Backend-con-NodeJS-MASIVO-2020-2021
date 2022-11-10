# Ejemplo #1: Configurando nuestro ambiente de trabajo
### Description
En este ejemplo, prepararemos nuestro ambiente de trabajo para hacer el despliegue a producción, sin embargo es necesario hacer algunas adecuaciones para que el proyecto funcione sin problemas. 

### Requerimientos
- Git.
- Una cuenta en Heroku. [Crear cuenta](https://www.heroku.com/).
- Tener instalado `Heroku CLI`. [Download](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

### Objetivo
Una vez terminado el despliegue, podrás utilizar tu API para hacer peticiones desde tu servicio de Frontend que más adelante desarrollaremos en React.

### Desarrollo
Ahora que hemos terminado de diseñar y construir nuestra aplicación ha llegado el momento de ponerla a prueba en un ambiente de producción. A lo largo de las sesiones pasadas hemos estado probando cada uno de nuestros endpoints para utilizarlos en nuestro proyecto de Frontend. Sin embargo, todavía hay unas adecuaciones por hacer para que esto pueda ser desplegado en producción.

#### Preparando nuestra aplicación
Hasta el momento, la aplicación se encuentra adaptada para un ambiente de desarrollo, por lo que ahora debemos prepararla para poder ser ejecutada dentro de un ambiente de producción.

1. Lo primero que haremos será instalar una nueva dependencia llamada `dotenv`, que nos permitirá pasarle variables de entorno desde un archivo `.env` y así desde un ambiente de producción, acceder a las variables de entorno generadas dentro de la plataforma que vayamos a utilizar, en este caso `Herokuu`.
```
npm i -S dotenv
```

2. Ya que hemos instalado la dependencia, procederemos a configurarla dentro de nuestro proyecto. Vamos a modificar nuestro archivo `app.js` y agregaremos `dotenv` al principio del archivo.
```js
require('dotenv').config(); // Configuring dotenv
```

3. Ahora, para que nuestra aplicación siga funcionando de forma adecuada y adaptada a las variables de entorno, generaremos un archivo `.env` donde colocaremos nuestras variables necesarias.
```
# Application
PORT=8080

# Authorization
JWT_SECRETKEY=secretkey
JWT_EXPIRESIN=36000

# Database
DB_USER=root
DB_PASSWORD=123456
DB_DATABASE=sesion6
DB_HOST=127.0.0.1
DB_PORT=3306
```
> Nota: es importante que NUNCA subas este archivo a tu código, ya que en algún momento almacenaras información sensible, API Keys, etc. De preferencia, maneja un archivo `.env` de ejemplo, para que otros desarrolladores puedan registrar sus propias credenciales basados en ese archivo de referencia.

4. Ahora, modificaremos parte de nuestro código para que este obtenga la información desde nuestro archivo `.env` utilizando `process.env`.
```js
// app.js
app.listen(process.env.PORT, () => {
  console.log(`Express on port ${process.env.PORT}`);
});
```

5. Y también, la variable de la llave secreta en nuestro archivo `routes/auth.js` y `middlewares/authentication.js`.
```js
// routes/auth.js
const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRETKEY, {
  expiresIn: process.env.JWT_EXPIRESIN,
});
```

```js
// middlewares/authentication.js
jwt.verify(authorization, process.env.JWT_SECRETKEY, async (err, decoded) => {
  if (err) return res.status(401).json({ message: 'Unauthorized' });
  req.user = await sequelize.models.users.findOne({ where: { id: decoded.userId }});
  next();
});
```

6. Ahora, haremos unas modificaciones en nuestro archivo de configuración de base de datos para `Sequelize`. Primero cambiaremos nuestro archivo `config/config.json` a `config/config.js`. Ya que ahora, lo haremos que soporte variables de entorno para su configuración.
```js
require('dotenv').config();

const defaultConfig = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mariadb',
};

module.exports = {
  development: defaultConfig,
  production: Object.assign(defaultConfig, {
    /** You can override the default config here */
  }),
};
```

7. Ahora, verifiquemos que todo funciona adecuadamente 🚀
[Ir al Ejemplo #2](../Ejemplo-2/README.md)
