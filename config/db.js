const { Sequelize } = require("sequelize");

const db = new Sequelize("inventory", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
