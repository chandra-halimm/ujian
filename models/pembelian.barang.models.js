const { DataTypes } = require("sequelize");
const db = require("../config/db");
const BarangModels = require("./barang.models");

const PembelianBarangModels = db.define("pembelianbarang", {
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

BarangModels.hasMany(PembelianBarangModels, { foreignKey: "id_barang" });
PembelianBarangModels.belongsTo(BarangModels, { foreignKey: "id_barang" });

module.exports = PembelianBarangModels;
