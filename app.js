const express = require('express');
const sequelize = require('./config/database');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON en el body de las solicitudes
app.use(express.json());

const Autor = require('./models/Autor');
const Libro = require('./models/Libro');

const autoresRoutes = require('./routes/autores');
const librosRoutes = require('./routes/libros');


//Chequear el nombre de estos...
app.use('/api/autores', autoresRoutes);
app.use('/api/libros', librosRoutes);

app.get('/', (req, res) => {
  res.send('Ta andandoooo!');
});

// Conectar a la Base
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la BD exitosa');
  })
  .catch(error => {
    console.error('No se pudo conectar a la BD', error);
  });

sequelize.sync({ force: false }) // Cambia a true solo para borrar y crear tablas
  .then(() => {
    console.log('Tablas sincronizadas');
  })
  .catch(error => {
    console.error('Error al sincronizar las tablas:', error);
  });

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
