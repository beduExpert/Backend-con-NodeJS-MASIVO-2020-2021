# PREWORK

### OBJETIVO

* Comprender los diferentes tipos de Base de Datos que existen.
* Identificar cómo diseñar una base datos 
* Conectar diversas bases de datos con NodeJS

## Sesión 06

### Desarrollo

Han sido creadas diferentes bases de datos a fin de que personas, empresas u organizaciones públicas y privadas puedan almacenar información de manera rápida y de fácil acceso.

Los diferentes tipos de bases de datos pueden ser clasificados según su utilidad, el área de aplicación, entre otras. A continuación se presentan los principales tipos de bases de datos.

**Por la variabilidad**

* **Bases de datos estáticas:** son aquellas que solo se emplean para la lectura o consulta de información, la cual no puede ser alterada. Generalmente, se trata de datos históricos que se emplean para realizar análisis de información en específico, por ello son típicas de la inteligencia empresarial.

* **Bases de datos dinámicas:** son bases de datos que pueden ser consultados y actualizados según las necesidades que se presenten.

**Por su contenido**

* **Base de datos bibliográficas:** contienen los datos principales de una publicación. De allí que solo contengan información sobre el nombre del autor o autores, fecha de publicación, título, editorial, número de edición, área de estudio o temática, entre otros. En algunos casos puede incluir un resumen de las publicación.

* **Base de datos de texto completo:** son aquellas bases de datos que almacenan por completo las fuentes primarias de documentos o textos, en especial si son de carácter histórico, científico o documental.

* **Directorios:** se trata de las bases de datos en las que se registran números telefónicos, direcciones de correo electrónico, datos de facturación, códigos, entre otros. Estas bases de datos son ampliamente utilizadas en las empresas, a fin de registrar información sobre sus empleados, clientes, proveedores, entre otros. El ejemplo más común son las guías telefónicas.

* **Base de datos especializada:** son las que se emplean en diversas áreas que tienen un público determinado y que son construidas a fin de satisfacer una necesidad en específico. Se emplean en las áreas de la biología, química, medicina, entre otros.

**Por la administración de datos**

* **Bases de datos jerárquicas:** en estas se almacena un gran volumen de información que está organizada según su nivel de importancia y de datos datos compartidos. Parte de lo más importante a los datos complementarios. Su mayor defecto es la repetición de datos.

* **Base de datos de red:** es aquella que contiene una serie de datos registrados y conectados entre sí. Es ampliamente utilizada por programadores.

* **Bases de datos transaccionales:** su finalidad es recolectar y recuperar datos de manera rápida. Por lo general son empleadas para realizar análisis de calidad, recolectar datos de producción, realizar transferencias bancarias, entre otros.

* **Bases de datos relacionales:** se emplea a fin de representar problemas reales y administrar datos de manera dinámica. Su objetivo es relacionar datos de diversas formas, y es capaz de recuperar datos mediante consultas de información.

* **Bases de datos multidimensionales:** permiten desarrollar aplicaciones específicas. Las tablas que conforman estas bases de datos pueden ser tablas o métricas.

* **Base de datos documentales:** se emplean para almacenar gran cantidad de información completa y realizar búsquedas más rápidas y efectivas.

**Ejemplos de bases de datos**

Algunos ejemplos de bases de datos son:

* **Bibliotecas públicas:** son espacios en los que se emplean bases de datos, generalmente gestionados por bibliotecólogos, a fin de registrar la información principal de los libros, las revistas, los periódicos y demás publicaciones que tienen, así como, también sus préstamos y circulación entre los usuarios.

* **Historial médico:** bases de datos destinadas registrar la información específica con respecto al estado de salud de los pacientes, es decir, historia médica, tratamientos, análisis, entre otros.

* **Nóminas de pago:** bases de datos empleadas generalmente en las empresas para registrar información de los empleados con respecto a los cargos y salarios asignados.
 
### SQL
 
**SQL -siglas de Structured Query Language-**, es el lenguaje de consultas a bases de datos, que nos permitirá crear, modificar, consultar y eliminar tanto bases de datos como sus tablas y registros.

Como todo lenguaje informático, posee su propia **sintaxis**, **tipos de datos** y **elementos**. 

**Elementos del lenguaje SQL**

El lenguaje SQL se basa en varios elementos. Para la comodidad de los desarrolladores de SQL todos los comandos del lenguaje necesarios en los correspondientes sistemas de gestión de bases se ejecutan a través de una interfaz específica de línea de comandos SQL (command-line interface o CLI).

* **Cláusulas:** las cláusulas son componentes de los estados y las querys.

* **Expresiones:** las expresiones pueden producir valores escalares o tablas, que consisten en columnas y filas de datos.

* **Predicados:** que especifican las condiciones que se utilizan para limitar los efectos de los comandos y las consultas, o para cambiar el flujo del programa.

* **Querys:** una query o consulta va a recuperar los datos, en base a un criterio dado.

* **Comandos:** con los comandos puedes controlar las operaciones, el flujo del programa, conexiones, sesiones, o diagnósticos. 

**¿Cuál es la mejor forma de interactuar con una base de datos?**

Hay dos enfoques para interactuar con una base de datos: 

* Usar el lenguaje de consulta nativo de las bases de datos (por ejemplo, SQL)
* Uso de un modelo de datos de objetos ("ODM") / modelo relacional de objetos ("ORM"). Un ODM / ORM representa los datos del sitio web como objetos JavaScript, que luego se asignan a la base de datos subyacente. Algunos ORM están vinculados a una base de datos específica, mientras que otros proporcionan un backend independiente de la base de datos.

El mejor *rendimiento* se puede obtener utilizando SQL o cualquier lenguaje de consulta compatible con la base de datos. Los ODM suelen ser más lentos porque utilizan código de traducción para mapear entre objetos y el formato de la base de datos, lo que puede no utilizar las consultas de base de datos más eficientes (esto es particularmente cierto si el ODM admite diferentes backends de base de datos y debe hacer mayores concesiones en términos de qué base de datos funciones son compatibles).

El beneficio de usar un ORM es que los programadores pueden seguir pensando en términos de objetos JavaScript en lugar de la semántica de la base de datos; esto es particularmente cierto si necesita trabajar con diferentes bases de datos (en el mismo sitio web o en diferentes sitios web). También proporcionan un lugar obvio para realizar la validación y verificación de datos.