import prisma from "../../../client";

export default async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    const produk = JSON.parse(req.body);

    const tambah = await prisma.produk.create({
        data: {
            no: produk.id,
            jenisproduk: produk.jenis,
            namaproduk: produk.nama,
            hargaproduk: produk.harga,
            deskripsi: produk.deskripsi,
            uploadfile: produk.file,
        },
    });

    res.json(tambah);
};