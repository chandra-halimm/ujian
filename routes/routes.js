const express = require("express");
const router = express.Router();
const {
  createBarang,
  getBarang,
  deleteBarang,
} = require("../controller/barang.controller");
const {
  getPembelian,
  createPembelian,
} = require("../controller/pembelian.barang");

router.post("/barang", createBarang);
router.get("/barang", getBarang);
router.delete("/barang/:id", deleteBarang);
router.get("/pembelian", getPembelian);
router.post("/pembelian", createPembelian);

module.exports = router;
