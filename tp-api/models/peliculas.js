// models/pelicula.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pelicula = sequelize.define('Pelicula', {
  poster_path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('Por Ver', 'Vistas', 'Preferidas'),
  }
});

module.exports = Pelicula;
