# Ejemplo #3
### Objetivo
En la clase anterior, hemos construido el proceso de autenticación, permitiendonos generar usuarios e iniciar sesión, sin embargo todavía todos los usuarios tienen acceso a nuestras rutas. Por eso, es importante indicar cuales de nuestras rutas son de acceso autorizado y además si tiene el rol para hacerlo.

### Desarrollo
#### Autenticación de usuarios
1. Lo primero que haremos será generar un middleware que nos permitirá verificar el acceso e identificar el usuario autenticado. Vamos a crear el directorio `middlewares` donde crearemos cada uno de ellos.
```
mkdir middlewares
```

2. Ahora, crearemos un archivo `authentication.js` donde escribiremos las validaciones necesarias.
```js
// authetication.js
const { response } = require('express')
const jwt = require('jsonwebtoken')
const sequelize = require('../db')

const authenticate = (req, res, next) => {
  const { authorization } = req.headers

  jwt.verify(authorization, 'secretkey', async (err, decoded) => {
    if(err) return res.status(401).json({ message: 'Unauthorized!' })
    req.user = await sequelize.models.users.findOne({ where: { id: decoded.userId } })
    next()
  })
}

module.exports = authenticate
```

Como podrás observar en el código anterior los middlewares tienen una similitud a los handlers de las solicitudes, sin embargo, su caracteristica principal es interceptar las solicitudes para realizar una acción previa a continuar con la solicitud.

3. Ya con el middleware listo, es momento de implementarlo en aquellas rutas que sean consideradas de acceso restringido, en este caso, las de productos, reseñas, usuarios y ordenes de compra. Para lograrlo haremos una modificación en nuestro archivo `routes/index.js`.
```js
const express = require('express');
const router = express.Router();

const authenticate = require('../middlewares/authentication');

// Add the required routes
router.use('/auth', require('./auth')); 
router.use('/products', authenticate, require('./products'));
router.use('/reviews', authenticate, require('./reviews'));
router.use('/users', authenticate, require('./users'));
router.use('/orders', authenticate, require('./orders'));

module.exports = router;
```

4. Una vez que hemos aplicado la autenticación, es hora de probar nuestro servicio.
[Ir a reto #2](../Reto-02/Readme.md)

#### Autorización a través de permisos
Ahora que ya estamos autenticados, necesitamos indicarle a nuestra API, cuales rutas son accesibles para usuarios de tipo `administrador` y cuales son para usuarios de tipo `cliente`. 

1. Vamos a construir un nuevo middleware que nos permitirá identificar si un usuario tiene acceso o no a cierto recurso.
```js
const permission = (...allowedRoles) => {
  return (req, res, next) => {
    const { user } = req;
    if (user && allowedRoles.includes(user.type)) {
      return next(); // if type permission is allowed, so continue the request using the next middleware
    }
    return res.status(403).json({ message: 'Forbidden' });
  };
}

module.exports = permission;
```

2. Con este middleware ahora podremos utilizarlo en cada una de nuestras rutas, para protegerlo de acuerdo a los requerimientos
```js
// products.js
const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// Get all products
router.get('/', permission('admin', 'client'), async (req, res) => {
  ...
});

// Create a new product
router.post('/', permission('admin'), async (req, res) => {
  ...
});

// Update a product by id
router.put('/:id', permission('admin'), async (req, res) => {
  ...
});

// Delete a product by id
router.delete('/:id', permission('admin'), async (req, res) => {
  ...
});

module.exports = router;
```

3. Ahora revisemos que los permisos funcionan correctamente.

[Ir al reto #3](../reto-03/README.md)

#RetaTuPotencial
