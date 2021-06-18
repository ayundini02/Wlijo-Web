import MainLayout from "../../component/main-layout";
import detailProduk from "../../component/dataWlijo/produk.json"
import Link from "next/link";

  export async function getServerSideProps(context) {
      return {
          props: { detailProduk },
      };
  }

  const Data = (props) => (
    <div className="row justify-content-center">
    <h1>{props.id}</h1>


          <a>{props.jenis}</a>
        <img src={props.gambar} alt="" />
        <h2>{props.nama}</h2>
        <h3>{props.harga}</h3>
        <p>{props.dekripsi}</p>
        </div>
  );
  
  const Detail = (props) => (
    <MainLayout>
        <main id="main">
      <section className="property-single nav-arrow-b">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-lg-8">
          <h4>PRODUK</h4>
            <h1>{props.jenis}</h1>
            <img src={props.gambar} alt="" />
            <h2>{props.nama}</h2>
            <h3>{props.harga}</h3>
            <p>{props.dekripsi}</p>
            </div>
            {props.detailProduk.map((produk) => (
      <Data
      id={produk.id}
      jenis={produk.jenis}
      gambar={produk.gambar}
      nama={produk.nama}
      harga={produk.harga}
      dekripsi={produk.dekripsi}
      />
    ))}
            </div>
            </div>
    </section>
    </main>
    </MainLayout>
  );
  
  export default Detail;