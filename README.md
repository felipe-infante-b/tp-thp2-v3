# tp-thp2-v3
TP Final - Taller de Programacion 2.
Profesor: Osvalo Ojeda.
Alumno: Felipe Infante.

----------------------------

Sistema de Manejo de Libreria.

Cuenta con Autores y Libros,
los libros estan asociados a autores.
Se usa SQLite para almacenar la informacion.

Requerimientos:
Node.js, Git, SQLite.

PASOS:
1.Clonar repositorio de GitHub
git clone https://github.com/felipe-infante-b/tp-thp2-v3.git

2.Navegar al directorio del proyecto
cd TP V2

3.Instalar dependecias
npm install

4.Correr el Server
(Va a correr en http://localhost:3000 por default)
npm run dev

5.Testear Endpoints:
AUTORES
    GET /api/autores - Get all authors
    POST /api/autores - Create a new author
    PUT /api/autores/:id - Update an existing author
    DELETE /api/autores/:id - Delete an author
LIBRO
    GET /api/libros - Get all books
    POST /api/libros - Create a new book
    PUT /api/libros/:id - Update an existing book
    DELETE /api/libros/:id - Delete a book


NOTA:
Para borrar / resetear la base de datos
eliminar el archivo "database.sqlite"
y correr nuevamente las migraciones
node models/index.js

----------------------------

Estructura del Proyecto:
├── controllers/       # logica de negocio para las rutas
│   ├── autorController.js
│   └── libroController.js
├── models/            # Modelos de Sequalize y asociaciones
│   ├── index.js
│   ├── Autor.js
│   └── Libro.js
├── routes/            # Rutas Express y API para los endpoitns
│   ├── autorRoutes.js
│   └── libroRoutes.js     
├── config/            # configuracion SQLite
│   ├── database.js
├── app.js             # Entrada de Aplicacion


