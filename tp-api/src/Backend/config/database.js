const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('API', 'camila', 'tpapi', {
  host: 'localhost',
  dialect: 'mssql',
  port: 1433,
  dialectOptions: {
    options: {
      encrypt: false, // Si tu base de datos requiere encriptación, ajusta esto
    },
  },
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

