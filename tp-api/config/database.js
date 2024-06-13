require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialectOptions: {
    options: {
      encrypt: false, // cambiar a true si usas Azure
      enableArithAbort: true,
      trustServerCertificate: true, // cambiar a false en producción si usas un certificado SSL
      dateStrings: true, // Puede ser necesario para manejar fechas como cadenas
      typeCast: true, // Puede ser necesario para convertir automáticamente tipos de datos
      
    },
  },
    
  logging: console.log, // Opcional: activa los logs de Sequelize
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
})();

module.exports = sequelize;


