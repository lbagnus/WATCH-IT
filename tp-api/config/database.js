require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, null, null, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  dialectOptions: {
    instanceName: process.env.DB_INSTANCE,
    options: {
      trustedConnection: true // Esto indica que se usará la autenticación de Windows
    }
  },
  logging: false
});


// Probar la conexión
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
})();

module.exports = sequelize;


