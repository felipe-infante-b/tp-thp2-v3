const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Autor = require('./Autor');

const Libro = sequelize.define('Libro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  fechaPublicacion: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
});

Autor.hasMany(Libro, { foreignKey: 'autorId', onDelete: 'CASCADE' });
Libro.belongsTo(Autor, { foreignKey: 'autorId' });

module.exports = Libro;
