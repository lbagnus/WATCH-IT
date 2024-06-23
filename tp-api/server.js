const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const User = require('./models/user');
const Pelicula = require('./models/peliculas');
require('dotenv').config();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
const { Op } = require('sequelize');

// Configura CORS para permitir solicitudes desde todos los orígenes
app.use(cors());
app.use(bodyParser.json());

// Sincronizar la base de datos
sequelize.sync({ force: false })
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar la base de datos:', err));

// Ruta para registrar usuarios con hash de contraseña
app.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// Ruta para manejar el inicio de sesión
app.post('/Login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
});

app.use(express.static('public'));

// Ruta para agregar películas
app.post('/peliculas', async (req, res) => {
  const { id_usuario, poster_path, estado } = req.body;

  try {
    const existingPelicula = await Pelicula.findOne({
      where: {
        id_usuario,
        poster_path,
        estado
      }
    });

    if (existingPelicula) {
      return res.status(400).json({ message: 'La película ya existe en la lista' });
    }

    const newPelicula = await Pelicula.create({
      id_usuario,
      poster_path,
      estado
    });

    res.status(201).json(newPelicula);
  } catch (error) {
    console.error('Error al agregar película:', error);
    res.status(500).json({ message: 'Error al agregar película', error: error.message });
  }
});

// Ruta para obtener películas
app.get('/peliculas', async (req, res) => {
  const { estado, id_usuario } = req.query;

  try {
    const peliculas = await Pelicula.findAll({
      where: {
        estado,
        id_usuario,
      },
    });

    res.status(200).json(peliculas);
  } catch (error) {
    console.error('Error al obtener películas:', error);
    res.status(500).json({ message: 'Error al obtener películas', error: error.message });
  }
});

// Ruta para eliminar una película por ID
app.delete('/peliculas/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const pelicula = await Pelicula.findByPk(id);

    if (!pelicula) {
      return res.status(404).json({ message: 'Película no encontrada' });
    }

    await pelicula.destroy();
    res.status(200).json({ message: 'Película eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar película:', error);
    res.status(500).json({ message: 'Error al eliminar película', error: error.message });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
