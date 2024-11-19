// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const Autor = require('./Autor')(sequelize, DataTypes);

// sequelize.sync();

// module.exports = {
//   sequelize,
//   Autor
// };

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite'
});

// Importa los modelos
const Autor = require('./Autor')(sequelize, DataTypes);
const Libro = require('./Libro')(sequelize, DataTypes);

// Configurar las asociaciones aquí
Autor.hasMany(Libro, {
  foreignKey: 'autorId',
  as: 'libros'
});

Libro.belongsTo(Autor, {
  foreignKey: 'autorId',
  as: 'autor'
});

// Sincronizar los modelos con la base de datos
sequelize.sync();

module.exports = {
  sequelize,
  Autor,
  Libro
};
