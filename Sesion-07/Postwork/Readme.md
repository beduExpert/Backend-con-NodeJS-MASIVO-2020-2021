# POSTWORK

### OBJETIVO

* Asegura tu API REST con express-jwt

## Sesión 07

Con **express-jwt** puedes proteger datos y rutas que solo queremos que usuarios específicos de nuestra aplicación tengan acceso, todo esto con datos que nos envía el cliente basados en [jwt](https://jwt.io/).

* Dependencias y estructura del proyecto.

Vamos a iniciar un proyecto ejecutando el típico:
 
`npm init -y`

Luego instalamos las dependencias de [desarrollo](https://nodemon.io/):

`npm i --save-dev nodemon`

* A continuación instalamos las dependencias del cliente:

[Express](http://expressjs.com/)
[express-jwt](https://github.com/auth0/express-jwt)

`npm i express express-jwt`

* Definiendo los script

vamos a definir dos script para iniciar el servidor, uno para el entorno de desarrollo y el otro para el cliente

* Definiendo un servidor básico de express

Vamos a crear el servidor de express, para esto vamos a utilizar **http** que viene por defecto en el core de node.js (así que no tenemos que instalarlo) y **creamos un archivo index.js** en la carpeta raíz del proyecto:

* Corremos el servidor con el comando: 

`npm run start-dev`

* Creando rutas en express

Para crear rutas en express vamos a llamar el **método get** de la instancia de express (app). Vamos a crear un llamado que devolverá usuarios por lo tanto declaramos una variable que contenga una lista de usuarios llamada **users** y crearemos la **ruta /api/users** y por último en el middleware de la ruta damos la respuesta

* Asegurando las rutas

Vamos por fin a asegurar las rutas de nuestra API REST para que solo los usuarios que sean **admin puedan tener acceso** a los datos de la API, para esto vamos a utilizar la dependencia que ya instalamos anteriormente **express-jwt** la requerimos y se la pasamos como middleware a la ruta de express y como parámetro le pasamos un objeto que contenga el **secret** con el cual vamos a **acceder al token** que manda el usuario por la cabecera de la ruta y ya solo en nuestro middleware validamos que el usuario sea admin.

* Probando nuestra API REST

Para probar que la API esté protegida y que devuelve los datos correspondientes vamos a utilizar curl que funciona desde la consola, también puedes usar postman. Otra herramienta que estaremos utilizando seria la pagina oficial de **jwt.io** donde vamos a crear los token de prueba:

![Token](./img/img1.png)

**Token:** 
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwibmFtZSI6Im5vZGUiLCJsYXN0bmFtZSI6ImpzIn0.E5oqAI2at3NzW4z4CCxRdhCp0hOy-Qzvir2zXGINQU8
```

* Ejecutamos el comando

```
curl -v -H 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1p
biI6dHJ1ZSwibmFtZSI6Im5vZGUiLCJsYXN0bmFtZSI6ImpzIn0.E5oqAI2at3NzW4z4CCxRdhCp0hOy-Qzvir2zXGINQU8' http://localhost:3000/api/users
```

Y si todo sale bien obtendremos el siguiente resultado.

![Resultado](./img/img2.png)
