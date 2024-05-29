"use client";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Home() {
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

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/barang/${id}`);
      setBarang(barang.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Gagal menghapus data:", error);
    }
  };

  return (
    <section className="container">
      <div className="my-5 d-grid gap-2">
        <div className="row">
          <div className="col-4">
            <Link href="/barang">
              <Button>Tambah Barang</Button>
            </Link>
          </div>
          <div className="col-4">
            <Link href="/pembelian">
              <Button>Tambah Pembelian</Button>
            </Link>
          </div>
          <div className="col-4">
            <Link href="/penjualan">
              <Button>Tambah Penjualan</Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Barang</th>
              <th>Stok</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {barang.map((options, index) => (
              <tr key={options.id}>
                <td>{index + 1}</td>
                <td>{options.namaBarang}</td>
                <td>{options.stok}</td>
                <td className="d-flex gap-2">
                  <Button>Edit</Button>
                  <Button onClick={() => deleteData(options.id)}>Hapus</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}
