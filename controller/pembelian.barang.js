const PembelianBarangModels = require("../models/pembelian.barang.models");
const BarangModels = require("../models/barang.models");

const getPembelian = async (req, res) => {
  try {
    const data = await PembelianBarangModels.findAll({
      include: {
        model: BarangModels,
        attributes: ["namaBarang"],
      },
    });
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const createPembelian = async (req, res) => {
  try {
    const { id_barang, qty } = req.body;

    console.log("Request data:", { id_barang, qty });

    const data = await PembelianBarangModels.create({
      id_barang,
      qty,
    });

    const dataBarang = await BarangModels.findOne({ where: { id: id_barang } });

    if (!dataBarang) {
      return res.status(404).json({
        msg: "Barang tidak ditemukan",
      });
    }

    const newStock = dataBarang.stok + parseInt(qty);

    await BarangModels.update({ stok: newStock }, { where: { id: id_barang } });

    return res.status(201).json({
      data: data,
    });
  } catch (error) {
    console.error("Error creating pembelian:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { getPembelian, createPembelian };
