# Reto 2

Realiza el siguiente ejercicio como parte de lo visto en **promesas**, descrito a continuación:

1. De la sesión *modulos esenciales* utiliza **http** para hacer una petición a "The Star Wars API"

    [SWAPI](https://swapi.dev/)

2. Usa la siguiente *url* para hacer una petición GET [*https://swapi.dev/api/people/?page=1/*](https://swapi.dev/api/people/). Usa el *query param **page*** para obtener diferentes personajes. Por ejemplo, la siguiente petición [*http://swapi.dev/api/people/?page=9*](http://swapi.dev/api/people/?page=9) tendrá los siguientes resultados:

    ```json
    {
        "count": 82,
        "next": null,
        "previous": "http://swapi.dev/api/people/?page=8",
        "results": [
            {
                "name": "Sly Moore",
                "height": "178",
                "mass": "48",
                "hair_color": "none",
                "skin_color": "pale",
                "eye_color": "white",
                "birth_year": "unknown",
                "gender": "female",
                "homeworld": "http://swapi.dev/api/planets/60/",
                "films": [
                    "http://swapi.dev/api/films/5/",
                    "http://swapi.dev/api/films/6/"
                ],
                "species": [],
                "vehicles": [],
                "starships": [],
                "created": "2014-12-20T20:18:37.619000Z",
                "edited": "2014-12-20T21:17:50.496000Z",
                "url": "http://swapi.dev/api/people/82/"
            },
            {
                "name": "Tion Medon",
                "height": "206",
                "mass": "80",
                "hair_color": "none",
                "skin_color": "grey",
                "eye_color": "black",
                "birth_year": "unknown",
                "gender": "male",
                "homeworld": "http://swapi.dev/api/planets/12/",
                "films": [
                    "http://swapi.dev/api/films/6/"
                ],
                "species": [
                    "http://swapi.dev/api/species/37/"
                ],
                "vehicles": [],
                "starships": [],
                "created": "2014-12-20T20:35:04.260000Z",
                "edited": "2014-12-20T21:17:50.498000Z",
                "url": "http://swapi.dev/api/people/83/"
            }
        ]
    }
    ```

3. Usa paralelismo con ayuda de promesas para obtener todas las páginas de personajes, es decir, debes hacer la petición de cada página en el mismo momento y esperar por todos los resultados.
4. Luego de esperar por lo resultados, mezcla todos los personajes y agrupa en dos arreglos con el campo "gender" en *male* o *female*
5. Generar dos archivos *female.json* y *male.json* con los resultados agrupados según corresponda.