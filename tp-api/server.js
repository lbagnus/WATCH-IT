const express = require('express');
const cors = require('cors'); // Importa el middleware cors
const sequelize = require('./config/database');
const User = require('./models/user');
const Pelicula = require('./models/peliculas');
require('dotenv').config();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
const fs = require('fs');
const { Op } = require('sequelize');

// Configura CORS para permitir solicitudes desde todos los orígenes
app.use(cors());
app.use(bodyParser.json());

// Sincronizar la base de datos
sequelize.sync({ force: false }) // Utiliza force: true para desarrollo, false para producción
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar la base de datos:', err));

// Ruta para registrar usuarios con hash de contraseña
app.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Generar el hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10); // Usar 10 salt rounds

    // Crear un nuevo usuario con la contraseña hasheada
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword // Almacenar el hash en la base de datos
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
    // Buscar el usuario por el email proporcionado
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña ingresada con la contraseña almacenada
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Si las credenciales son válidas, devolver el usuario
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
});

//cargar archivos estaticos
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para manejar errores 404
//app.use((req, res, next) => {
 //res.status(404).send('Archivo no encontrado');
 //});

app.post('/peliculas', async (req, res) => {
  const { id_usuario, poster_path, estado } = req.body;

  try {
    // Verificar si la película ya existe para el usuario y el estado proporcionados
    const existingPelicula = await Pelicula.findOne({
      where: {
        id_usuario,
        poster_path,
        estado
      }
    });

    if (existingPelicula) {
      alert("Esta película ya existe");
      return res.status(400).json({ message: 'La película ya existe en la lista' });
    }

    // Si no existe, crear una nueva entrada
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

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
