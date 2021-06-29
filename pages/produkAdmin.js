import MainLayout from "../component/MainLayoutAdmin";

const ProdukAdmin = (props) => (
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

  </div>
</section>

<section class="inner-page">
  <div class="container">
  <label class="form-label">Jenis Produk</label>
  <select class="form-select" aria-label="Default select example">
  <option selected></option>
  <option value="1">Sayur</option>
  <option value="2">Buah</option>
  <option value="3">Lauk-Pauk</option>
</select><br/>
  <div class="mb-3">
  <label class="form-label">Nama Produk</label>
  <input type="text" class="form-control" id="nama" placeholder="nama produk"/>
</div>
<div class="mb-3">
  <label class="form-label">Harga Produk</label>
  <input type="text" class="form-control" id="harga" placeholder="Rp."/>
</div>
<div class="mb-3">
  <label class="form-label">Deskripsi</label>
  <textarea class="form-control" id="deskripsi" rows="3"></textarea>
</div>
<div class="mb-3">
  <label for="formFileSm" class="form-label">Upload File</label>
  <input class="form-control form-control-sm" id="upload" type="file"/>
</div>
<br/>
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">tambah</button>
  </div>
  <br/>
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
 
        <tr>
            <td align="center">-</td>
            <td align="center">-</td>
            <td>-</td>
            <td align="center">-</td>
            <td align="center">-</td>
            <td align="center">-</td>
            <td>
            <button class="btn btn-primary" type="button">ubah</button>
            &nbsp;
            <button class="btn btn-danger" type="button">hapus</button>
            </td>
        </tr>
 
        <tr>
            <td align="center">-</td>
            <td align="center">-</td>
            <td>-</td>
            <td align="center">-</td>
            <td align="center">-</td>
            <td align="center">-</td>
            <td>
            <button class="btn btn-primary" type="button">ubah</button>
            &nbsp;
            <button class="btn btn-danger" type="button">hapus</button>
            </td>
        </tr>
    </table>
  </div>
</section>

</main>
    </MainLayout>

);

export default ProdukAdmin;