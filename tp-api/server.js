const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const User = require('./models/user');
const Pelicula = require('./models/peliculas');
require('dotenv').config();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const fs = require('fs');
const { Op } = require('sequelize');

app.use(cors());
app.use(bodyParser.json());

sequelize.sync({ force: false })
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar la base de datos:', err));

app.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ firstName, lastName, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

app.post('/Login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) return res.status(401).json({ message: 'Credenciales inválidas' });
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  fs.appendFileSync('server.log', `${new Date().toISOString()} - Error: ${err.stack}\n`);
  res.status(500).send('Error interno del servidor');
});

app.get('/peliculas', async (req, res) => {
  const { estado, id_usuario } = req.query;
  console.log(`Buscando películas con estado: ${estado} y id_usuario: ${id_usuario}`);
  try {
    const peliculas = await Pelicula.findAll({
      where: { id_usuario: id_usuario, estado: estado }
    });
    res.status(200).json(peliculas);
  } catch (error) {
    console.error('Error al obtener películas:', error);
    res.status(500).json({ error: 'Error al obtener películas' });
  }
});

app.post('/peliculas', async (req, res) => {
  const { id_usuario, poster_path, estado } = req.body;
  if (!id_usuario || !poster_path || !estado) {
    return res.status(400).json({ error: 'Faltan datos requeridos para agregar la película' });
  }
  try {
    const nuevaPelicula = await Pelicula.create({ id_usuario, poster_path, estado });
    res.status(201).json(nuevaPelicula);
  } catch (error) {
    console.error('Error al agregar película:', error);
    res.status(500).json({ error: 'Error al agregar película' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

