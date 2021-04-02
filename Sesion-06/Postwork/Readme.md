# POSTWORK

### OBJETIVO

* Crear un CRUD con Node.js MongoDB y Express.js

## Sesión 06


### Desarrollo

* Configurar el servidor

Primero tenemos que configurar nuestro proyecto en express, para ello creamos un archivo **app.js** que es el archivo raíz donde crearemos nuestro servidor.

* Conectividad de la base de datos

Luego de configurar el servidor estaremos configurando nuestra conexión a la base de datos, para eso tenemos que crear otro archivo en la carpeta raíz **db.js**.

**Nota:**

Aquí necesitamos el módulo de Mongoose. Mongoose es una biblioteca de modelado de datos de objetos (ODM) para MongoDB y Node.js. Administra las relaciones entre los datos, proporciona validación de esquemas y se utiliza para traducir entre objetos en código y la representación de esos objetos en MongoDB.

Ahora ejecute el comando node app.jspara ejecutar su servidor y hacer la conexión a db. Además, no olvide importar su archivo db en app.js.

* Definición del modelo de usuario

Ahora trabajaremos en la operación CRUD para un usuario. Entonces, nuestro primer paso hacia eso sería **definir el modelo.**

Para que su código se vea limpio, cree una carpeta separada para los modelos y cree un archivo **user_model.js** en ella.

Ahora definiremos nuestro modelo de node usando mongoose.

* Funciones del controlador de escritura

Después de crear el modelo de usuario, ahora tenemos que crear el archivo del controlador de usuario en la carpeta del controlador.

Un controlador es un archivo donde se escribe toda nuestra lógica empresarial.

Así que definiremos nuestra operación CRUD en este archivo.

La primera función que escribiremos es la de **crear un usuario.**

* Crear un usuario y guardarlo en la base de datos, encontrar todos los usuarios usando  la **función find()** para encontrar todos los usuarios, también podemos usar la **función findAll()** para el mismo.

Para encontrar un solo usuario lo estamos encontrando por **id**, tenemos una función **findById()** para lograr el mismo, solo tenemos que pasar el id del usuario en params.

* Eliminar un usuario con la ayuda de la función **findByIdAndRemove().**

* Actualizar un usuario con la opción **{new: true}** en el **método findByIdAndUpdate()** que se utiliza para devolver el documento modificado a la then()función en lugar del original.

Felicidades **¡Has terminado!**

No olvide probar estas API con Postman o Insomnia.