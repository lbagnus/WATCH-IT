// server.js
const express = require('express');
const sequelize = require('./config/database');
const User = require('./models/user.model');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Ruta para crear un nuevo usuario
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para obtener todos los usuarios
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
