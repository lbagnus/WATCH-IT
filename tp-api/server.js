const express = require('express');
const cors = require('cors'); // Importa el middleware cors
const sequelize = require('./config/database');
const User = require('./models/user');
require('dotenv').config();

const app = express();
app.use(express.json());

// Configura CORS para permitir solicitudes desde todos los orígenes
app.use(cors());

// Sincronizar la base de datos
sequelize.sync({ force: false }) // Utiliza force: true para desarrollo, false para producción
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar la base de datos:', err));

// Ruta para registrar usuarios
app.post('/users', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = await User.create({ firstName, lastName, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// Ruta para manejar el inicio de sesión
app.post('/userlogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca el usuario por el email proporcionado
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Compara la contraseña ingresada con la contraseña almacenada
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Si las credenciales son válidas, devuelve el usuario
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
