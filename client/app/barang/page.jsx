"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";

const Page = () => {
  const [addBarang, setAddBarang] = useState({
    namaBarang: "",
    stok: "",
  });

  const handleAddData = (e) => {
    const { name, value } = e.target;
    setAddBarang({
      ...addBarang,
      [name]: value,
    });
  };

  const addData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/barang", addBarang);
      setAddBarang({
        namaBarang: "",
        stok: "",
      });
      // Confirm success and redirect
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
          <label htmlFor="barang" className="form-label">
            Nama Barang
          </label>
          <input
            type="text"
            className="form-control"
            id="barang"
            name="namaBarang"
            value={addBarang.namaBarang}
            onChange={handleAddData}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stok" className="form-label">
            Stok
          </label>
          <input
            type="number"
            className="form-control"
            id="stok"
            name="stok"
            value={addBarang.stok}
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
