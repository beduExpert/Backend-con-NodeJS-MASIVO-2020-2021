# Reto 3

1. Crea un proyecto nuevo e inicia npm.
2. Configura el archivo package.json para crear tu propio módulo
3. Dado un arreglo de números (Véase el arreglo desordenado) , resuelve el ordenamiento del arreglo en n-pasos, utiliza el algoritmo "Ordenamiento Burbuja Simple". Haz uso de buenas prácticas de programación.
    - Utiliza la siguiente función *random* para crear un arreglo desordenado, esta función crea un número random pasando como parámetros un limite inferior (min), un limite superior (max) y el número de decimales que va a tener el número aleatorio si es que se necesita (decimals)

        ```jsx
        function random(min, max, decimals){
            let presition = Math.pow(10, decimals)
            min = min * presition
            max = max * presition
            return Math.floor(Math.random() * (max - min + 1) + min) / presition;
        }
        ```

    **Ejemplo de un arreglo desordenado**

    ```
    [
      101135.14, 660253.92, 383747.52, 651277.92,
      924370.01, 479865.46, 224182.58, 594518.11,
      567883.24, 239871.64,  537494.4,  348940.2,
      -42776.12, 767753.47, 485882.32, 514106.64,
      375801.53,  47547.89, 984612.72, -39960.02,
      849523.29, 637683.03, 566332.09, 747242.26,
      471775.05, 398418.62, 482632.39, 162094.76,
      825365.94, 458037.91, 449057.77, 108498.54,
       598695.9,   1017.99, 963877.73, 275279.25,
      817080.77, 763447.83, 461862.77, 514294.39,
       156735.4, 575737.95, 409202.91, 427316.89,
      706899.73,  516992.6, 474788.15, 481251.25,
      -25758.81, -27482.04
    ]
    ```

    **El resultado es el siguiente arreglo ordenado:**

    ```
    [
      -25758.81, -27482.04, -39960.02, -42776.12,
      101135.14,   1017.99, 108498.54,  156735.4,
      162094.76, 224182.58, 239871.64, 275279.25,
       348940.2, 375801.53, 383747.52, 398418.62,
      409202.91, 427316.89, 449057.77, 458037.91,
      461862.77, 471775.05, 474788.15,  47547.89,
      479865.46, 481251.25, 482632.39, 485882.32,
      514106.64, 514294.39,  516992.6,  537494.4,
      566332.09, 567883.24, 575737.95, 594518.11,
       598695.9, 637683.03, 651277.92, 660253.92,
      706899.73, 747242.26, 763447.83, 767753.47,
      817080.77, 825365.94, 849523.29, 924370.01,
      963877.73, 984612.72
    ]
    ```

    **Ordenamiento Burbuja Simple**

    [Ordenamiento de burbuja](https://es.wikipedia.org/wiki/Ordenamiento_de_burbuja)

4. Realiza el ordenamiento anterior utilizando "Ordenamiento por canastas" y "Ordenamiento por Inserción" obteniendo los mismos resultados.

    **Ordenamiento por canastas**

    También conocido como [Ordenamiento por casilleros](https://es.wikipedia.org/wiki/Ordenamiento_por_casilleros)

    **Ordenamiento por inserción**

    [Ordenamiento por inserción](https://es.wikipedia.org/wiki/Ordenamiento_por_inserción)