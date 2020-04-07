const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  { host: "217.0.0.1", dialect: "mysql", operatorsAliases: false }
);

module.exports = sequelize;

// Global varialbe
global.sequelize = sequelize;
