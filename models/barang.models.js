const { DataTypes } = require("sequelize");
const db = require("../config/db");

const BarangModels = db.define("barang", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  namaBarang: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  stok: {
    type: DataTypes.INTEGER(4),
    allowNull: true,
    defaultValue: 0,
  },
});

module.exports = BarangModels;
