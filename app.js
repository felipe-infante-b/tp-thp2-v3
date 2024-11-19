const express = require('express');
const sequelize = require('./config/database.js');
const autorRoutes = require('./routes/autorRoutes');
const libroRoutes = require('./routes/libroRoutes');

const app = express();
app.use(express.json());

// Rutas principales
app.use('/api/autores', autorRoutes);
app.use('/api/libros', libroRoutes);

// Sincronizar base de datos y levantar servidor
(async () => {
  try {
    await sequelize.sync({ force: false }); // Cambiar a `true` si deseas reiniciar las tablas
    console.log('Base de datos sincronizada');

    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
})();


// const express = require('express');
// const sequelize = require('./config/database');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware para interpretar JSON en el body de las solicitudes
// app.use(express.json());

// const Autor = require('./models/Autor');
// const Libro = require('./models/Libro');

// const autoresRoutes = require('./routes/autores');
// const librosRoutes = require('./routes/libros');


// //Chequear el nombre de estos...
// app.use('/api/autores', autoresRoutes);
// app.use('/api/libros', librosRoutes);

// app.get('/', (req, res) => {
//   res.send('Ta andandoooo!');
// });

// // Conectar a la Base
// sequelize.authenticate()
//   .then(() => {
//     console.log('Conexión a la BD exitosa');
//   })
//   .catch(error => {
//     console.error('No se pudo conectar a la BD', error);
//   });

// sequelize.sync({ force: false }) // Cambia a true solo para borrar y crear tablas
//   .then(() => {
//     console.log('Tablas sincronizadas');
//   })
//   .catch(error => {
//     console.error('Error al sincronizar las tablas:', error);
//   });

// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en el puerto ${PORT}`);
// });
