import MainLayout from '../component/MainLayoutAdmin';
import prisma from '../client.ts';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export async function getServerSideProps(context) {
  const tambahProduk = await prisma.produk.findMany();

  return { props: { tambahProduk } };
}

const FormTambahProduk = (props) => {
  const { register, handleSubmit, errors } = useForm();
  return (

    <section class="inner-page">
      <div class="container">
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <label class="form-label">Jenis Produk</label>
          <select {...register('jenis', { required: true })}
            class="form-select" id="jenis" aria-label="Default select example">
            <option selected></option>
            <option id="sayur" value="sayur">Sayur</option>
            <option id="buah" value="buah">Buah</option>
            <option id="lauk" value="lauk-pauk">Lauk-Pauk</option>
          </select><br />
          <div class="mb-3">
            <label class="form-label">Nama Produk</label>
            <input {...register('nama', { required: true })}
              type="text" class="form-control" id="nama" placeholder="nama produk" />
          </div>
          <div class="mb-3">
            <label class="form-label">Harga Produk</label>
            <input {...register('harga', { required: true })}
              type="text" class="form-control" id="harga" placeholder="Rp." />
          </div>
          <div class="mb-3">
            <label class="form-label">Deskripsi</label>
            <textarea {...register('deskripsi', { required: true })}
              type="text" class="form-control" id="deskripsi" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label for="formFileSm" class="form-label">Upload File</label>
            <input {...register('gambar', { required: true })}
              type="text" class="form-control form-control-sm" id="gambar" />
          </div><br />
          <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="submit">tambah</button>
          </div>
        </form>
      </div>
    </section>
  );
};

const adminProduk = (props) => {
  const [tambahProduk, setDaftarProduk] = useState(props.tambahProduk);
  return (
    <MainLayout>
      <main id="main">

        <section class="breadcrumbs">
          <div class="container">

            <div class="d-flex justify-content-between align-items-center">
              <h2>Produk</h2>
              <ol>
                <li><a href="/berandaAdmin">Home</a></li>
                <li>Produk</li>
              </ol>
            </div>
            <FormTambahProduk
              onSubmit={async (data, event) => {
                const produk = { id: data.id, jenis: data.jenis, nama: data.nama, harga: data.harga, deskripsi: data.deskripsi, gambar: data.gambar };

                try {
                  const respon = await fetch('/api/produk/tambah', {
                    method: 'POST',
                    body: JSON.stringify(produk),
                  });

                  if (!respon.ok) throw new Error(respon.statusText);

                  let status = await respon.json();

                  if (status !== null) {
                    event.target.reset();
                    setDaftarProduk([...tambahProduk, produk]);
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
            />
            <table>
              <tr>
                <th>No.</th>
                <th>Jenis Produk</th>
                <th>Nama Produk</th>
                <th>Harga Produk</th>
                <th>Deskripsi</th>
                <th>Upload File</th>
                <th></th>
              </tr>

              <tbody>
                {tambahProduk.map((produk, nomor = 1) => (
                  <tr key={produk.id}>
                    <td>{nomor + 1}</td>
                    <td>{produk.jenis}</td>
                    <td>{produk.nama}</td>
                    <td>{produk.harga}</td>
                    <td>{produk.deskripsi}</td>
                    <td>{produk.gambar}</td>
                    <td>
                      <button class="btn btn-primary" type="submit">ubah</button>
                      <button class="btn btn-danger" type="submit">hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>


          </div>
        </section>
      </main>
    </MainLayout>
  )
}


export default adminProduk;