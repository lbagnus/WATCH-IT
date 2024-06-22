// models/pelicula.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Pelicula = sequelize.define('Pelicula', {
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: User, // Nombre del modelo de usuario
      key: 'id'}
    },

  poster_path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING //DataTypes.ENUM('Por Ver', 'Vistas', 'Preferidas'),
  }

});

module.exports = Pelicula;
