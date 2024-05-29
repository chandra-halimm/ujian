const express = require("express");
const router = express.Router();
const { createBarang, getBarang } = require("../controller/barang.controller");
const {
  createPembelian,
  getPembelian,
} = require("../controller/pembelian.barang");

router.post("/barang", createBarang);
router.get("/barang", getBarang);

module.exports = router;
