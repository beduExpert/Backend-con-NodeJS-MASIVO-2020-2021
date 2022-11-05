# Reto #1
### Objetivo
Desarrollar la lógica para el registro de usuarios clientes desde el sitio web.

Duración del reto: 15m.


### Desarrollo
1. Deberás crear tu lógica dentro del archivo `routes/auth.js`en el handler de signup.

2. Deberás cumplir con los siguientes requisitos de evaluación:
  - Validarás si el usuario existe dentro de tu base de datos, en caso de ser verdadero, continuaras con el proceso.
  - En caso contrario, deberás arrojar un mensaje de error con un estado HTTP 400, indicando que ese correo ya ha sido registrado.
  - Los usuarios registrados desde aquí serán solo de tipo: `cliente`. Ej. `type: 'client'`.

3. Verificarás en tu base de datos que el usuario haya sido creado correctamente.

#RetaTuPotencial

<br/>

[Ir al Ejemplo 03](../Ejemplo-03/Readme.md)