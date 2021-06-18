import { useRouter } from "next/router";
import MainLayout from "../../../component/main-layout";
import detailProduk from "../../../component/dataWlijo/produk.json";

export async function getServerSideProps(context) {
    let kode = context.prams.kode;
    let data = detailProduk.find((produk) => produk.id == kode);

    let { jenis, gambar, nama, harga } = data;

    return { props: { jenis, gambar, nama, harga, dekripsi } };
}

const DetailKategori = (props) => {
    const router = useRouter();
    const { kode, jenis } = router.query;
    return(
        <MainLayout>
            <div className="container">
            <h4>PRODUK</h4>
            <h1>{jenis}</h1>
            <p>Kode: {kode}</p>

            <h1>{props.jenis}</h1>
            <img src={props.gambar} alt="" />
            <h2>{props.nama}</h2>
            <h3>{props.harga}</h3>
            <p>{props.dekripsi}</p>
            </div>
        </MainLayout>

    );
};

export default DetailKategori;