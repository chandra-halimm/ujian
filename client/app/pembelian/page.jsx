"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [addPembelian, setAddPembelian] = useState({
    id_barang: 0,
    qty: "",
  });

  const [barang, setBarang] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/barang");
        setBarang(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddData = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setAddPembelian({
      ...addPembelian,
      [name]: name === "id_barang" ? parseInt(value, 10) : value,
    });
  };

  const addData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/pembelian", addPembelian);
      setAddPembelian({
        id_barang: "",
        qty: "",
      });
      if (window.confirm("Berhasil menambahkan data")) {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Gagal menambah data:", error);
    }
  };

  return (
    <div className="container my-5">
      <form onSubmit={addData}>
        <div className="mb-3">
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            name="id_barang"
            value={parseInt(addPembelian.id_barang)}
            onChange={handleAddData}
          >
            <option value="">Pilih Barang</option>
            {barang.map((item) => (
              <option key={item.id} value={item.id}>
                {item.namaBarang}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="qty" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="qty"
            name="qty"
            value={addPembelian.qty}
            onChange={handleAddData}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
