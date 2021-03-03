# Reto 01
## Objetivo

- Unificar las herramientas vistas en el ejemplo 1 para leer parámetros previos a la ejecución y también utilizar la lectura de datos del usuario.
- Realizar pruebas del script de calculadora.

## Desarrollo

Utiliza el objeto `process.argv` para leer el tipo de operación que quiere realizar el usuario.

Utiliza el módulo `readline` para modificar la calculadora y hacerla más interactiva para el usuario. 

**Ejemplo:** 

El usuario necesita saber cuales son las opciones permitidas y luego ingresar la opción de operación que quiere realizar. 

Puedes mostrar un menú donde le muestras al usuario que operaciones puede hacer tu calculadora, después pides que ingrese el primer número y posteriormente el segundo. 

### Toma en cuenta los siguientes casos de prueba:

Caso 0. El usuario debe conocer las opciones que tiene a la mano. (Procura crearle un menú simple y agradable)

Caso 1. El usuario ingresa letras en lugar de números. (Crea mensajes para errores que pueden surgir con entradas no soportadas por tu programa)