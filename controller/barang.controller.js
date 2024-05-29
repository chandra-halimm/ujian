const BarangModels = require("../models/barang.models");

const getBarang = async (req, res) => {
  try {
    const data = await BarangModels.findAll();
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const createBarang = async (req, res) => {
  try {
    const { namaBarang, stok } = req.body;

    const check = await BarangModels.findOne({
      where: { namaBarang: namaBarang },
    });

    if (check) {
      return res.status(400).json({
        msg: "Barang sudah ada",
      });
    }

    const data = await BarangModels.create({
      namaBarang,
      stok,
    });

    return res.status(201).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const deleteBarang = async (req, res) => {
  try {
    const { id } = req.params;

    const barang = await BarangModels.findByPk(id);

    if (!barang) {
      return res.status(404).json({
        msg: "Barang not found",
      });
    }

    await barang.destroy();

    return res.status(200).json({
      msg: "Barang deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { getBarang, createBarang, deleteBarang };
