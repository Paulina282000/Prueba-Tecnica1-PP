# Prueba Técnica PP
**TASK**
1) resolver conflictos en el formato de autores y nombres libros
2) eliminar libros duplicados
3) resolver conflicto de falta de autores
4) resolver conflicto de años invalidos
5) resolver la carga de CSV

**Caracteristicas del proyecto**
- carga de archivos csv con la informacion de los libros
- procesamiento de datos para eliminar duplicados, corregir datos invalidos y organizar la informacion
- agrupacion logica de libros por autor y si no tiene autor por año de publicacion, se eligio los que no tienen autor conocido dejarlos al ultimo
- no se consideraron posibles ediciones del mismo libro 
 
**Tecnologias utilizadas**

-vite+react

-JavaScript

-HTML + CSS

-DOMPurify (libreria para manejar XSS)

-Web Crypto API (para hacer el HASH)

**Medidas de seguridad**
- Sanirtizacion de datos (proteccion XSS) con DOMPurify en 'BookTable.jsx', para evitar inyecciones malisiosas en los datos cargados desde CSV.
- Hashing SHA-256 para asegurar la integridad de datos se genera un HASH SHA-256 para asegurar que el contenido del CSV no haya sido manipulado
- Validacion de los archivos CSV, para verificar que los archivos validos solo sean CSV con tres columnas (`Título, Autor, Año`). No contempla lineas mal formateadas o con informacion incompleta.
- No se aceptan archivos mayores a 2MB.
