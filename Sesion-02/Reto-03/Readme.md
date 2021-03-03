## Reto 3

### Objetivos

Realizar peticiones anidadas con la librería `https`

### Desarrollo

Con el código del ejercicio anterior realizaremos una segunda petición para obtener la imagen astronómica del día y guardarla como archivo `.jpeg`

- Toma en cuenta que para que esta segunda petición sea lanzada, debe estar anidada dentro de la primera petición.
- Utiliza la librería estándar `fs`.
- Para guardar una imagen externa puedes adaptar la siguiente función:

```jsx
var fs = require('fs');
var https = require('https');
// Función ejemplo para guardar una imagen de una url externa
function descargarImagen(url, rutaLocal) {
  var fullUrl = url;
  var file = fs.createWriteStream(localPath);
  var request = https.get(url, function (response) {
    response.pipe(file);
  });
}
```
