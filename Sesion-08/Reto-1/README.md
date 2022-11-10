# Reto #1
### Descripción
En el [Ejemplo #3](../Ejemplo-3/README.md) hemos visto como hacer el registro de nuestros usuarios dentro de nuestra plataforma, con esto que haz aprendido, estás listo para una implementación. Ahora, toca el turno de que desarrolles la lógica para que el usuario pueda iniciar sesión.

Recuerda que los campos para iniciar sesión, son a través del `Correo Electrónico` que el usuario ha registro y su contraseña.

Duración del reto: 20 min.

### Requerimientos
- Haber completado el ejercicio #1, #2, #3, en caso de haber sido completado, solicita ayuda del experto para que te proporcione el código hasta el ejercicio #3.
- Tener la última versión del código del servidor web.

### Desarrollo
1. Tendrás que desarrollar tu lógica dentro del componente `/src/pages/LoginPage.js`.
2. Deberás mostrar un mensaje de error en caso de que las crendenciales sean incorrectas.
3. En caso, de que las credenciales sean correctas, deberás almacenar el token resuelto por el API en `localStorage` (puedes saber más sobre como almacenar información en LocalStorage [aquí](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)).
4. También, deberás redireccionar al usuario a la página de productos (en caso de tener dudas de como lograr eso, consulta la documentación de [React.router](https://reactrouter.com/web/api/location)).

#RetaTuPotencial

[Continuar con el Ejemplo #4](../Ejemplo-4/README.md)
