# Ejercicio 2

## Objetivo

Comprender el uso de promesas como mecanismo asíncrono de Javascript

## Requerimientos

- Instalación de Node completada
- Conexión a internet

## Desarrollo

### ECMAScript

Es una especificación de leguaje de programación publicada por ECMA International, que a partir del 2015 a la actualidad se encarga de regir cómo debe ser interpretado y funcionar el lenguaje Javascript.

A partir de la edición 6 (ES6) se agregaron cambios significativos con el propósito de escribir aplicaciones complejas y con mejoras importantes en la sintaxis y entro ello tenemos las ***promesas.***

Para conocer más de este cambio entre ECMAScript 5 y ECMAScript6 consulta el siguiente artículo en el que además habla de la ediciones más recientes y la importancia de que exista está especificación:

[Qué es ECMAScript](https://openwebinars.net/blog/que-es-ecmascript/)

### Promesas

Como se planteo a partir de ES6 se agregó las ***promesas***  a la especificación, las promesas permiten solucionar el calback hell

**Recordar**: Una promesa sólo puede completarse con éxito o fallar una vez. El estado de una promesa es: Pendiente, Resulta y Rechazada

**Importante**: Las promesas tienen la particularidad de que se pueden *encadenar* ***then***, siendo el resultado de una promesa, los datos de entrada de otra posible función, además, tienen un mecanismo para el *manejo de errores* ***catch***

```jsx
let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let numero = Math.random();
    if (numero >= 0.5) resolve("Éxito");
    reject("Error");
  }, 2000);
});
promesa.then((data) => console.log(data)).catch((data) => console.log(data));
console.log("Inicio");
```

### Pasar de callback a promesa

Existen casos en el queremos usar una función que usa callbacks y requerimos usar promesas para que el código sea más legible, podríamos reescribir el código pero esto podría llevar más tiempo, entonces, como solución podemos utilizar el constructor *Promise()* para pasar de callback a promesa

El siguiente ejemplo hace uso de *fs* usando callbacks para leer un archivo, observamos que es usada como promesa con *then*, de leer con éxito mostrará en pantalla el contenido del archivo.

```jsx
const fs = require("fs")

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    });
  });
}

readFile("./archivo.txt")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### Promise.all

Es una promesa que se cumplirá cuando toda las promesas del argumento iterable hayan sido cumplidas, o bien se rechazará cuando alguna de ellas se rechace. 

```jsx
let promesa1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "uno");
});

let promesa2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "dos");
});

let promesa3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "tres");
});

Promise.all([promesa1, promesa2, promesa3]).then((valores) => {
  console.log(valores);
});
```

```bash
[ 'uno', 'dos', 'tres' ]
```

### Ejercicio

1. Crea los archivos con nombre: "archivo1.txt", "archivo2.txt", "archivo3.txt" y "promesas.js"
2. En *archivo1.txt* copia:

    ```
    1. «La fuerza estará ya contigo… siempre.» (Obi-Wan Kenobi a Luke Skywalker en la Estrella de la Muerte. STAR WARS, episodio IV, Una Nueva Esperanza)
    ```

3. En *archivo2.txt*, copia:

    ```
    2. «Miedo, ira, agresividad, el lado oscuro ellos son. Si algún día rigen tu vida, para siempre tu destino dominarán.» (Yoda a Luke Skywalker. STAR WARS, episodio V, El Imperio Contrataca)
    ```

4. En *archivo4.txt*, copia:

    ```
    3. «¡Tú siempre con tus “NO PUEDE HACERSE”! ¿Es que escuchándome no estabas?.» (Yoda a Luke Skywalker. STAR WARS, episodio V, El Imperio Contrataca)
    ```

5. Copia el siguiente código a *promesas.js*

    ```jsx
    let fs = require("fs");

    // Función de utilidad para crear una promesa por conseguir el contenido de un
    // archivo de forma asíncrona.
    let obtenerArchivo = function (archivo) {
      return new Promise(function (resolve, reject) {
        fs.readFile(__dirname + "/" + archivo, "utf-8", function (err, datos) {
          if (err) {
            return reject(err);
          }

          datos = datos.replace(/\r?\n/g, "");

          resolve(datos);
        });
      });
    };

    console.log("Promesas inicializadas.");

    let files = Promise.all([
      obtenerArchivo("archivo1.txt"),
      obtenerArchivo("archivo2.txt"),
      obtenerArchivo("archivo3.txt"),
    ]);

    // Mostrar los archivos que fueron leídos exitosamente
    files.then(function (collection) {
      console.log("Promesas completadas:");

      collection.forEach(function (datos, i) {
        console.log("Archivo " + (i + 1) + ":", datos);
      });
    });
    ```

6. Ejecuta con

    ```bash
    node promesas.js
    ```
