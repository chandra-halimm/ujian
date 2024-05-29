const { DataTypes } = require("sequelize");
const db = require("../config/db");
const BarangModels = require("./barang.models");

const PenjualanBarangModels = db.define("pembelianbarang", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  id_barang: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  qty: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
  },
});

BarangModels.hasMany(PenjualanBarangModels, { foreignKey: "id_barang" });
PenjualanBarangModels.belongsTo(BarangModels, { foreignKey: "id_barang" });

module.exports = PenjualanBarangModels;
