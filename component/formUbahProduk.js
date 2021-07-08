import { useForm } from 'react-hook-form';

const FormTambahProduk = (props) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
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
                    </select>
                    {errors.jenis?.type === 'required' && "First jenis is required"}
                    <br />
                    <div class="mb-3">
                        <label class="form-label">Nama Produk</label>
                        <input {...register('nama', { required: true })}
                            type="text" class="form-control" id="nama" placeholder="nama produk" />
                        {errors.nama?.type === 'required' && "First name is required"}
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Harga Produk</label>
                        <input {...register('harga', { required: true })}
                            type="text" class="form-control" id="harga" placeholder="Rp." />
                        {errors.harga?.type === 'required' && "First harga is required"}
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Deskripsi</label>
                        <textarea {...register('deskripsi', { required: true })}
                            type="text" class="form-control" id="deskripsi" rows="3"></textarea>
                        {errors.deskripsi?.type === 'required' && "First deskripsi is required"}
                    </div>
                    <div class="mb-3">
                        <label for="formFileSm" class="form-label">Upload File</label>
                        <input {...register('gambar', { required: true })}
                            type="text" class="form-control form-control-sm" id="gambar" />
                        {errors.gambar?.type === 'required' && "First gambar is required"}
                    </div><br />
                    <div class="d-grid gap-2 d-md-block">
                        <button class="btn btn-primary" type="submit">tambah</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FormTambahProduk;