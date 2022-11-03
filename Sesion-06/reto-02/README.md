# Reto #02
### Descripción
En el ejercicio anterior, creamos dos de nuestras tablas necesarias para nuestro proyecto, ahora necesitamos construir las tablas faltantes.

- La tabla de usuarios, que tendrá las siguientes propiedades:
  - Nombre.
  - Apellido Materno.
  - Apellido Paterno.
  - Tipo de usuario.
  - Correo Electrónico (este campo deberá ser único).
  - Contraseña.


> Para campos únicos puedes consultar más información aquí: https://sequelize.org/master/manual/validations-and-constraints.html#unique-constraint.


- La tabla de órdenes de compra, que deberá estar relacionada con el usuario.
  - Producto Relacionado.
  - Usuario Relacionado.
  - Cantidad de productos agregados.


> Si quieres saber más sobre como generar las relaciones puedes consultarlo aquí: https://sequelize.org/master/manual/assocs.html.

Duración del reto: 15m.

### Desarrollo
1. Crear las migraciones utilizando el comando de Sequelize CLI.

#RetaTuPotencial