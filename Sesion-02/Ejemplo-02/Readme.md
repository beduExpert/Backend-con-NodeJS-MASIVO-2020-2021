# Ejemplo 2

## Desarrollo

### Process

El objeto process contiene información sobre variables de entorno (`process.env`), argumentos de línea de comandos (`process.argv`) y métodos para salir/terminar un proceso de ejecución (`process.exit()`).

Cada script de Node.js que es ejecutado es en esencia un proceso del sistema operativo en el cual corre. Para visualizar esto crearemos el siguiente ejemplo:

1. Crea el siguiente archivo `proceso.js`

    ```bash
    console.log('Id del proceso:', process.id)
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', process.exit.bind(process, 0));
    ```

2. Ejecutalo con `node proceso.js`

La salida será algo similar a esto:

```bash
Id del proceso: 21356
Presiona cualquier tecla para salir
```

3. Antes de salir del programa, abre otra terminal y ejecuta el comando `ps aux | grep 'node'`

4. Observaras que el proceso de Node estará listado junto con su respectivo id. 

### Variables de entorno

Podemos accesar  a las variables de entorno de la terminal/bash/sistema por medio de la propiedad `process.env` que contiene un objete con la información almacenada en las variables de nuestro sistema.

1. Modifica el código anterior para imprimir tu listado de variables de entorno.

    ```jsx
    console.log('Id del proceso:', process.id)
    console.log('Variables de entorno:', process.id)

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', process.exit.bind(process, 0)); // Al presionar cualquier letra salimos
    ```

2. En tu terminal ahora crea la siguiente variable de entorno:

    ```bash
    export NODE_ENV=development
    ```

3. Al ejecutar el código anterior en la misma terminal se imprimirá el objeto en una salida similar a esta:

    ```bash
    Id del proceso: 21356
    Variables de entorno: { SHELL: '/bin/bash',
      USER: 'dany',
      HOME: '/home/dany',
      ...
    	NODE_ENV: 'development'
    }
    Presiona cualquier tecla para salir
    ```

Las variables de entorno suelen utilizarse para almacenar información que no queremos que esté contenida directamente en el código, comúnmente son llaves de acceso a servicios de terceros o constantes globales como el puerto para levantar un servidor.

### Argumentos de línea de comandos

La propiedad `process.argv` nos devuelve un arreglo de valores que son pasados cómo argumentos al haber sido ejecutado un script de Node.js.

1. Por ejemplo, si ejecutamos el siguiente comando:

    ```bash
    node proceso.js arg1 arg2 arg3=val3
    ```

2. Los primeros dos argumentos son 'node' y el nombre de la aplicación ('proceso.js' en nuestro caso). Así que `process.argv` equivaldría a:

    ```jsx
    [
      'node', 
      'proceso.js', 
      'arg1',
      'arg2', 
      'arg3=val3'
    ]
    ```

### Salir de un proceso

Para salir de un proceso usamos la función `exit`:

```jsx
process.exit()
```

Si tu aplicación encuentra algún error, también puedes especificar los códigos de error:

```jsx
// este proceso falló
process.exit(1)

// este proceso falló con un código diferente
process.exit(129)

// proceso exitoso
process.exit(0)

```

Saber cómo es que una aplicación falló permite a los desarrolladores programar una respuesta adecuada.

## Reto 2

1. Crea un script `suma.js` que reciba como argumentos dos números, los sume y luego imprima el resultado en el siguiente formato:

    ```bash
    $ node suma.js 33 12

    33 + 12 = 45
    ```

2. Guarda en una variable de entorno de la consola tu nombre ej. `export NOMBRE=Daniel`
3. Modifica el programa `suma.js` anterior para que antes de imprimir el resultado imprima tu nombre con el siguiente formato.

    ```bash
    $ node suma.js 33 12
    Programado por: **Daniel**
    33 + 12 = 45
    ```

4. Por último, devuelve un error en caso de que el usuario no ingrese argumentos o estos argumentos no sean del tipo número.