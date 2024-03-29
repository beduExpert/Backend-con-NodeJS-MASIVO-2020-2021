# Example 3
### Objetivo
Crear los modelos y la conexión a la base de datos necesarios para nuestro aplicación de Notas.

### Requerimientos
- Haber completado el Ejemplo 2.
- Tener instalado el servidor de base de datos: MariaDB.
- Tener una base de datos previamente creada con la siguiente estructura.

#### Estructura de la base de datos

```
-----------------------------------------------------|
| Notes                                              |
-----------------------------------------------------|
| id          INT      Primary Key   AutoIncrement   |
| createdAt   DATETIME                               |
| updatedAt   DATETIME                               |
| heading     VARCHAR                                |
| content     TEXT                                   |
-----------------------------------------------------|
```

### Desarrollo
Ahora que ya hemos definido las primeras rutas de nuestra API, es momento de darle vida al proyecto y para esto agregaremos un **ORM (Object-relational Mapping)**, ORM es una técnica en programación para convertir datos entre diferentes tipos de sistemas incompatibles, este particularme crea un objeto de base de datos virtual que puede ser utilizado dentro de nuestro lenguaje de programación.

> Recuerda que un modelo de datos nos permite describir la estructura de los datos y sus restricciones.

Para nuestra aplicación utilizaremos **Sequelize**, un ORM basado en **promesas** que funciona con PostgreSQL, MySQL, MariaDB, SQLite y Microsoft SQL Server. Y MariaDB, como nuestro sistema gestor de base de datos.

#### Creando nuestra conexión a la base de datos
1. Lo primero que debemos hacer es instalar la dependencia `sequelize` y `mariadb`, que nos permitirá hacer la conexión a nuestra base de datos.
  
    ```
    npm i sequelize mysql2
    ```

2. Una vez completada la instalación de `sequelize`, vamos a crear el archivo de configuración donde registraremos nuestros modelos de datos.

    ```js
    // database.js
    const { Sequelize } = require('sequelize');

    // Exporting models
    const NoteModel = require('./models/notes');

    // Database connection
    const sequelize = new Sequelize('<database>', '<username>', '<password>', {
      host: 'localhost',
      dialect: 'mysql',
      logging: false,
    });

    // Adding models
    const models = [NoteModel];

    // Registering models to Sequelize
    for (let model of models) {
      model(sequelize);
    }

    module.exports = sequelize;
    ```

> Recuerda cambiar los valores `database`, `user` y `password` para realizar una conexión exitosa, de lo contrario obtendrás un error al ejecutar tu proyecto.

#### Creando nuestro modelo de datos
Una vez que hemos completado la configuración de nuestra conexión, lo siguiente es crear nuestro modelo de datos utilizando Sequelize.

1. Vamos a crear un directorio `models` donde mantendremos cada uno de nuestros modelos de datos que vayamos creando.

    ```
    mkdir models
    ```

2. Dentro del directorio que creamos, vamos a generar nuestro modelo de datos para almacenar nuestras notas.

    ```js
    const { DataTypes } = require('sequelize');

    const NoteModel = (sequelize) => sequelize.define('Notes', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      heading: DataTypes.STRING,
      content: DataTypes.TEXT
    });

    module.exports = NoteModel;
    ```

    Como puedes observar dentro de la definición del modelo, `sequelize` nos provee tipos de datos que nos permiten indicarle a nuestro código como deberá procesar e interpretar cada una de nuestras propiedades.

    También, podrás darte cuenta que el modelo es similar a los propiedades definidas en la tabla de tu base datos, esto es por que justamente es lo que hace un ORM, mapear las propiedades requeridas y opcionales de tu tabla para una creación de dichos objetos u instancias a través de tu lenguage de programación.

3. Después, debemos agregar nuestro modelo creado a la configuración de la base de datos.

    Ahora que ya hemos definimos nuestro modelo, es hora de darle un poco de vida a nuestra aplicación, para ello vamos a modificar nuestro archivo `routes/notes.js` donde agregaremos la funcionalidad necesaria.

    Como primer paso, obtendremos la información almacenada en la base de datos utilizando el método `findAll` de Sequelize:
    
    ```js
    const sequelize = require('../database');

    // Handler for get notes
    router.get('/', async (req, res) => {
        return await sequelize.models.Notes.findAll()
          .then(data => res.json(data))
          .catch(err => res.json({ message: 'Error', data: err }))
    });
    ```

4. Ahora para obtener la información de una manera correcta, debemos configurar `body-parser` en nuestro proyecto, sin embargo, no es necesario instalarlo.

    > **Express** nos ayuda en la interpretación de la información que es enviada y para ello nos provee la funcionalidad de `body-parser` dentro del mismo paquete.

    ```js
    // app.js
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    ```

5. Ahora con estos cambios que ya hemos realizado, podremos acceder al objeto `body` dentro de nuestro `request` y esta se encontrará de una manera más legible. Solo queda que agreguemos la funcionalidad de Sequelize para generar un nuevo objeto de tipo `Notes` y guardarlo en nuestra base de datos.

    ```js
    // Handler for create a new note
    router.post('/',  async (req, res) => {
      const { body } = req
      return await sequelize.models.Notes.create({
        heading: body.heading,
        content: body.content,
      })
        .then(data => res.json({ message: 'Created successfully', data }))
        .catch(err => res.json({ message: 'Error', data: err }))
    });
    ```

    Enhorabuena! Hasta ahora hemos definido la funcionalidad para la obtención y la creación de notas, sin embargo, todavía resta la funcionalidad para la actualización y la eliminación de los recursos de notas.

6.  Actualización y eliminación de una nota.
    
    Como sabes, para realizar una actualización en nuestra base de datos, primeramente debe existir el recurso, para así identificarlo y hacer las modificaciones solicitadas por el cliente. Así que vamos a hacerlo:

    ```js
    // Handler for update a specific note
    router.put('/:id', async (req, res) => {
      const { body, params: { id } } = req
      const Note = await sequelize.models.Notes.findOne({ 
        where: {
          id: id
        }
      })
      if (!Note) {
        return res.status(404).json({ message: 'Note not found'});
      }
      const UpdatedNote = await Note.update({
        heading: body.heading,
        content: body.content,
      });
      return res.json({ message: 'Updated successfully', data: UpdatedNote });
    });
    ```

    Ahora, para hacer la eliminación del recurso, vamos a hacer la misma lógica de búsqueda del recurso y si este se encuentra, entonces podemos continuar con la eliminación.

    ```js
    // Handler for delete a specific note
    router.delete('/:id', async (req, res) => {
      const { params: { id } } = req;
      const Note = await sequelize.models.Notes.findOne({ 
        where: {
          id: id
        }
      })
      if (!Note) {
        return res.status(404).json({ message: 'Note not found'});
      }
      await Note.destroy();
      return res.json({ message: 'Deleted successfully' });
    });
    ```

<br/>

[Siguiente Reto 02](../reto-02/README.md)