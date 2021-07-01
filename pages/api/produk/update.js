import prisma from "../../../client";

export default async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    const produk = JSON.parse(req.body);

const perbarui = await prisma.produk.update({
    where: {
        id: produk.id,
    },
    data: {
        id: produk.id,
        jenis: produk.jenis,
        nama: produk.nama,
        harga: produk.harga,
        deskripsi: produk.deskripsi,
        gambar: produk.gambar,
    },
  });
  res.json(perbarui);
};