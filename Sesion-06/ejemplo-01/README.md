# Ejemplo 01
### Objetivo
Crear nuestro proyecto inicial

### Desarrollo

1. Ahora deberas inicializar un nuevo proyecto con Node utilizando el comando `npm init -y`, y posteriormente, instalar la dependencia de `Express`.
    
    ```
    npm i -S express
    ```

2. Generaremos nuestro archivo principal `app.js`, donde tendremos toda la configuración inicial y la inicialización de nuestra aplicación de Express.

    ```js
    // app.js
    const express = require('express');
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use('/api', require('./routes'));

    app.listen(3001, () => {
      console.log(`Express on port 3001`);
    });
    ```


<br/>

[Siguiente Reto 01](../reto-01/README.md)