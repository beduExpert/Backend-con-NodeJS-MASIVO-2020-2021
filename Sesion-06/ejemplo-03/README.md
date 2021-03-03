# Ejemplo #3
### Objetivo
Crear las primeras rutas de nuestro proyecto de E-commerce. Donde haremos la funcionalidad para la gestión de nuestros productos y sus reseñas.

### Desarrollo
En los ejercicios anteriores, hemos creado nuestros modelos de datos, ahora llegado el momento de utilizarlos y crear la funcionalidad de nuestra aplicación.

1. Vamos a crear nuestro directorio de rutas. Vamos a crearlo a través del siguiente comando `mkdir routes` y dentro agregaremos el archivo `index.js`.
```js
const express = require('express');
const router = express.Router();

// Add the required routes
// app.use(path, handler)

module.exports = router;
```

2. Una vez que hemos creado nuestro archivo para definir nuestras rutas, lo registraremos dentro de nuestra aplicación principal.
```js
// app.js
const express = require('express');
const app = express();

app.use('/api', require('./routes'));

app.listen(3001, () => {
  console.log(`Express on port 3001`);
});
```

3. Ahora, vamos a crear nuestras rutas para gestionar nuestros productos. Para esto, crearemos el archivo `products.js`.
```js
const express = require('express');
const router = express.Router();
const sequelize = require('../db');

// Get all products
router.get('/', async (req, res) => {
  const products = await sequelize.models.products.findAndCountAll();
  return res.status(200).json({ data: products });
});

// Create a new product
router.post('/', async (req, res) => {
  const { body } = req;
  const product = await sequelize.models.products.create({
    name: body.name,
    description: body.description,
    price: body.price,
    image: body.image,
  });
  await product.save();
  return res.status(201).json({ data: product })
});

// Update a product by id
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req;
  const product = await sequelize.models.products.findByPk(id);
  if (!product) {
    return res.status(404).json({ code: 404, message: 'Product not found' });
  }
  const updatedProduct = await product.update({
    name: body.name,
    description: body.description,
    price: body.price,
    image: body.image,
  });
  return res.json({ data: updatedProduct });
});

// Delete a product by id
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  const product = await sequelize.models.products.findByPk(id);
  if (!product) {
    return res.status(404).json({ code: 404, message: 'Product not found' });
  }
  await product.destroy();
  return res.json();
});

module.exports = router;
```

4. Una vez completadas las rutas, las registraremos en nuestro archivo `/routes/index.js`.
```js
const express = require('express');
const router = express.Router();

// Add the required routes
router.use('/products', require('./products'));

module.exports = router;
```

5. Haremos exactamente lo mismo, con nuestras rutas de para las reseñas, para eso crearemos el archivo `reviews.js` dentro del directorio `routes`.
```js
const express = require('express');
const router = express.Router();
const sequelize = require('../db');

// Get all reviews
router.get('/', async (req, res) => {
  const reviews = await sequelize.models.reviews.findAndCountAll();
  return res.status(200).json({ data: reviews });
});

// Creating a new review
router.post('/', async (req, res) => {
  const { body } = req;
  const review = await sequelize.models.reviews.create({
    content: body.content,
    productId: body.productId,
  });
  await review.save();
  return res.status(201).json({ data: review });
});

// Update a review by id
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req;
  const review = await sequelize.models.reviews.findByPk(id);
  if (!review) {
    return res.status(404).json({ code: 404, message: 'Product not found' });
  }
  const updatedReview = await product.update({
    content: body.content,
    productId: body.productId,
  });
  return res.json({ data: updatedReview });
});

// Delete a review by id
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  const review = await sequelize.models.reviews.findByPk(id);
  if (!review) {
    return res.status(404).json({ code: 404, message: 'Review not found' });
  }
  await review.destroy();
  return res.json();
});

module.exports = router;
```

6. Una vez completadas las rutas, las registraremos en nuestro archivo `/routes/index.js`.
```js
const express = require('express');
const router = express.Router();

// Add the required routes
router.use('/products', require('./products'));
router.use('/reviews', require('./reviews'));

module.exports = router;
```

Ahora es tu turno de darle funcionalidad a los modelos que haz creado de las tablas `usuarios` y `órdenes de compra`.

[Ir al reto #4](https://github.com/beduExpert/B2-Backend-Node-2020/tree/master/Sesion-06/reto-04)

#RetaTuPotencial
