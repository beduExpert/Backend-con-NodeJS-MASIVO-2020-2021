# Ejemplo #2
### Objetivo
En el ejercicio anterior, hemos configurado algunas protecciones dentro de nuestra API, pero ahora realizaremos todo el proceso de autenticación de nuestros usuarios. Por ahora, tenemos destinada una API a la gestión de usuarios, pero está diseñada para que un administrador pueda gestionarlos. Para ello, crearemos unas rutas especificas para que el usuario inicie sesión o se registre como un cliente y así poder abstraer dicha lógica.

### Desarrollo
1. El primer paso que haremos, será corregir como se almacenan las contraseñas en nuestra base de datos, por ahora, todo usuario registrado a través de nuestro API almacena la contraseña en un texto plano. Como sabes esto es una mala práctica de seguridad, ya que si por alguna razón un intruso llegara a vulnerar tu base de datos, podrá obtener los datos y sus contraseñas y será un problema para tu aplicación y tus usuarios. Así que, vamos a protegerlas, para eso utilizaremos el paquete `bcrypt` que nos permitirá hashear nuestros password y mantenerlos seguros.
```bash
npm i -S bcrypt
```

2. Ahora que hemos instalado la dependencia, haremos una modificación a nuestro módelo de usuarios dentro del archivo `/models/User.js`. Donde a través de los hooks disponibles dentro de Sequelize, utilizaremos `beforeCreate`, indicandole que antes de que se cree el registro debe procesar el password y hashearlo.
```js
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  lastname: DataTypes.STRING,
  type: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
    },
  },
});
```

3. También, agregaremos un método al modelo para validar las contraseñas hasheadas con lo que el usuario nos esta enviando a través de su solicitud.
```js
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const User = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    type: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
  });
  
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  return User;
};
```

4. Con la configuración anterior, cuando utilizemos el módelo de usuarios para crear uno nuevo, podremos darnos cuenta que nuestros usuarios ahora almacenan la contraseña hasheada. 
Este es un ejemplo de registro.
```json
{
  "data": {
    "id": 2,
    "name": "John",
    "lastname": "Doe",
    "type": "client",
    "email": "john.doe@web.com",
    "password": "$2b$10$2DilyYYJsJl7Bs8ZwAC7CusYplg7kVueJSG1rCDRi8vKeAXNmGVUi",
    "updatedAt": "2020-10-08T13:49:27.573Z",
    "createdAt": "2020-10-08T13:49:27.573Z"
  }
}
```

5. Ahora, vamos a generar nuestras rutas para iniciar sesión o permitir que un usuario se registre. Primero, vamos a generar un archivo `auth.js` donde agregaremos la lógica correspondiente a la autenticación del usuario.
```js
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // TODO: Add logic for authenticate user
});

router.post('/signup', (req, res) => {
  // TODO: Add logic for register a new user
});

module.exports = router;
```

6. Registramos nuestras rutas en el archivo `routes/index.js` para que estén disponibles para utilizarse.
```js
const express = require('express');
const router = express.Router();

// Add the required routes
router.use('/auth', require('./auth'));
router.use('/products', require('./products'));
router.use('/reviews', require('./reviews'));
router.use('/users', require('./users'));
router.use('/orders', require('./orders'));

module.exports = router;
```

7. Ahora, que ya hemos registrado nuestras rutas, vamos a crear la lógica correspondiente a Iniciar sesión. Modificaremos nuestro archivo `routes/auth.js` en el handler para `login`. Sin embargo, necesitamos una nueva dependencia para generar los tokens de acceso, así que vamos a instalar la dependencia:
```
npm i -S jsonwebtoken
```
```js
// auth.js
router.post('/login', async (req, res) => {
  const { body } = req;
  const user = await sequelize.models.users.findOne({ where: {
    email: body.email,
  }});

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!user.validPassword(body.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a token
  const token = jwt.sign({ userId: user.id }, 'secretkey', {
    expiresIn: 36000,
  });

  return res.json({
    message: 'Authenticated sucessfully',
    token,
  });
});
```

> Por ahora, estamos usando la configuración más básica de JWT, sin embargo, es importante aplicar una estrategía a través de llaves para asegurarte que los tokens están siendo generados y firmados por tu servidor. Si necesitas más información consulta la documentación del paquete JWT para Node: https://github.com/auth0/node-jsonwebtoken.

[Ir al reto #1](https://github.com/beduExpert/B2-Backend-Node-2020/tree/master/Sesion-07/Reto-01)

#RetaTuPotencial
