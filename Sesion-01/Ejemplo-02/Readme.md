# Ejemplo 2

## Objetivo

Conocer la línea de comandos de Node.js para ejecutar archivos con extensión `.js`.

## Requerimientos

Tener instalado Nodejs

## Desarrollo

Creamos un archivo llamado `ìndex.js` en nuestra carpeta de trabajo (puedes utilizar la terminal si lo deseas). Después vamos a copiar el siguiente código que es la implementación del problema **FizzBuzz**:

```jsx
function fizzBuzz() {

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
```

Ahora guarda el archivo, abre tu terminal y ejecuta el comando `node index.js`. Verás que en tu terminal aparecera el resultado de ejecutar el programa.