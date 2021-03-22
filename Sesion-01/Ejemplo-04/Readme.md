# Ejemplo 4

## Objetivo

Comprender el uso del archivo package.json

## Requerimientos

Tener instalado Nodejs y npm

## Desarrollo

### Package.json

Se considera este archivo como un manifesto de nuestro proyecto, donde se definen y se manejan características como nombre del proyecto, versión, repositorio, dependencias, autor, licencias, etc.

Se crea al iniciar un nuevo módulo con **npm**:

```bash
npm init
```

A continuación, nos pide configurar ciertas características respondiendo las preguntas que el asistente hace: 

- package name
- version
- description
- entry point
- test command
- git repository
- keywords
- author
- license

Y al final nos pide aceptar la configuración, después de esto se crea package.json. Aclarando, este archivo se puede crear manualmente únicamente con los siguientes campos: *name* y  *version*, pero mas adelante necesitaremos escribir los demás campos, la manera más práctica es iniciando npm.

Importante: El archivo **package.json** debe ser un **JSON** de formato válido esta implicación el siguiente link contiene la explicación y ejemplos de JSON que pueden aclarar tus dudas: [https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)

De igual forma, cuando se necesita iniciar npm y no es necesario configurar package.json en ese momento podemos utilizar la bandera **-y** que hará la configuración por defecto y que más adelante podemos editar.

```bash
npm init -y
```

## Explicando los campos de package.json

### name

Es un campo obligatorio, la cadena representa el nombre del proyecto y es utilizado para formar un identificador junto a **version** en caso de ser publicado en npm. Entonces en caso de ser publicado se tiene que asegurar que no exista el nombre en npm.

### version

Es una cadena obligatoria que indica cuál es la versión más actual del proyecto definida por nosotros, para el versionamiento sigue la convencion **MAJOR.MINOR.PATCH**

### description

Es la cadena que indica lo que hace el proyecto creado

### keywords

Son palabras clave que tienen que ver con la descripción o intención del proyecto

### main

Es la cadena que indica el path del archivo principal del proyecto

### scripts

Es un objeto que indica comandos que podemos correr utilizando el proyecto creado, es utilizado aveces para correr el proyecto con varios entornos de desarrollado, o simplemente para evitar el uso de comandos que podemos olvidar a la hora de ejecutar el proyecto

### author

Es una cadena o un objeto con la información del creador del proyecto

### contributors

Es un arreglo de una cadena u objeto con la información de los colaboradores

### license

Es la cadena que especifica el tipo de licencia con que protegeremos el proyecto

### dependencies

Es un objeto que contiene los nombres y versiones de los paquetes instalados 

Para ver más detalles de cómo configurar **package.json** revisa el enlace, son campos más detallados que para está sesión no serán necesarios.
