# Ejemplo 1
## Objetivo

Conocer las herramientas que incluye NodeJS por defecto para realizar aplicaciones de línea de comandos. 

Instalar y conocer algunas herramientas desarrolladas por terceros que nos ayudaran a desarrollar aplicaciones CLI.

## Requerimientos

- NodeJS instalado y funcionando en nuestra terminal
- Editor de código

## Desarrollo

### El objeto `process.argv`

En NodeJs el objeto `process.argv` es un objeto global que nos traerá un arreglo de cadenas que representan los argumentos que son pasados a un programa para su ejecución.

- El primer elemento siempre será la ruta en la que se encuetra el ejecutable de NodeJS.
- El segundo elemento será la ruta del archivo que se está ejecutando.
- Los subsecuentes elementos son los argumentos que el usuario está enviando de manera ordenada.
1. Crearemos un nuevo proyecto en un nuevo folder y crearemos un archivo `calculadora.js`.
2. Pasaremos argumentos de una manera muy similar a nuestro script `suma.js` de la sesión 2, pero esta vez el primer argumento después del nombre de nuestro script será el nombre de una operación (`suma`, `resta`, `multiplica` o `divide`), y los siguientes argumentos serán dos números a operar.
3. Guarda el siguiente código en el archivo `calculadora.js`:

```jsx
const tipoOperacion = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

switch (tipoOperacion) {
  case 'suma':
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
    break;
  case 'resta':
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
    break;
  case 'multiplica':
    console.log(`${num1} * ${num2} = ${num1 * num2}`)
    break;
  case 'divide':
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
    break;
  default:
    break;
}
```

### El módulo readline

Para tener una entrada asíncrona por parte del usuario cuándo nuestro código se está ejecutando utilizaremos la siguiente línea:

1. Guarda y ejecuta el siguiente código

    ```jsx
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('¿Quién eres?', name => {
      console.log(`Hola ${name}!`);
      readline.close();
    });
    ```

2. Analiza el comportamiento de esta línea. ¿Qué funcionalidades podremos mejorar nuestra calculadora con esta función?