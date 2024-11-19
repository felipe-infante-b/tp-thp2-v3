module.exports = (sequelize, DataTypes) => {
  const Libro = sequelize.define('Libro', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaPublicacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    autorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Autors',
        key: 'id'
      }
    }
  });

  return Libro;
};




// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Autor = require('./Autor');

// const Libro = sequelize.define('Libro', {
//   titulo: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   descripcion: {
//     type: DataTypes.TEXT,
//     allowNull: true,
//   },
//   fechaPublicacion: {
//     type: DataTypes.DATEONLY,
//     allowNull: true,
//   },
// });

// Autor.hasMany(Libro, { foreignKey: 'autorId', onDelete: 'CASCADE' });
// Libro.belongsTo(Autor, { foreignKey: 'autorId' });

// module.exports = Libro;

