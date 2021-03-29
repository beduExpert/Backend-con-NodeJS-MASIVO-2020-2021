# Postwork

### Requisitos

* Tener Node instalado.

### Objetivos

* Conocer herramientas de terceros para facilitar el desarrollo y mantener nuestros scripts funcionando.

## Sesión 02

### Nodemon

Como te has dado cuenta cuándo estamos creando un servidor web y queremos que los cambios se vean reflejados tenemos que tirar y volver a levantar nuestros servidores continuamente.

Para facilitarnos esta tarea existe el módulo Nodemon que puedes instalar de manera global con el comando:

`npm install -g nodemon`

Después de instalarlo podremos ejecutar nuestro script con el comando

`nodemon [nombre del archivo .js]`

Ahora después de guardar cada cambio en tu código podrás ver cómo el script vuelve a ejecutarse automáticamente.

Puedes revisar su uso en la [documentación oficial.](https://www.npmjs.com/package/nodemon)