import { useRouter } from "next/router";
import MainLayout from "../../../component/main-layout";
import detailProduk from "../../../component/dataWlijo/produk.json";
import Link from "next/link";

export async function getServerSideProps(context) {
    let kode = context.params.kode;
    let data = detailProduk.find((produk) => produk.id == kode);

    let { jenis, gambar, nama, harga, dekripsi } = data;

    return { props: { jenis, gambar, nama, harga, dekripsi } };
}

const DetailKategori = (props) => {
    const router = useRouter();
    const { kode, jenis } = router.query;

    return (
        <MainLayout>
            <main id="main">
      <section className="property-single nav-arrow-b">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-lg-8">
          <h1>{props.id}</h1>
              <div id="property-single-carousel" className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="carousel-item-b swiper-slide">
                    <img src={props.gambar} alt="" width="700px"/>
                    <div className="title-box-d">
                    <h3 className="title-d">{props.nama}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-single-carousel-pagination carousel-pagination"></div>
            </div>
            </div>
  
          <div className="row">
            <div className="col-sm-12">
  
              <div className="row justify-content-between">
                <div className="col-md-5 col-lg-4">
                  <div className="property-price d-flex justify-content-center foo">
                    <div className="card-header-c d-flex">
                      <div className="card-box-ico">
                        <span className="bi bi-cash">Rp.</span>
                      </div>
                      <div className="card-title-c align-self-center">
                        <h5 className="title-c">{props.harga}</h5>
                        <br/>
                        &nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse">
                          <i className="bi bi-cart">&nbsp;Buy</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-7 section-md-t3">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="title-box-d">
                        <h3 className="title-d">Deskripsi</h3>
                      </div>
                    </div>
                  </div>
                  <div className="property-description">
                    <p className="description color-text-a">
                      {props.dekripsi}
                    </p>
                  </div>
                </div>
              </div>
            </div>

    </div>
            </div>
    </section>
    </main>
        </MainLayout>
    );
};

export default DetailKategori;