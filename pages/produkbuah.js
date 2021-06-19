import MainLayout from "../component/main-layout";
import Link from "next/link";

const CardBuah = props => (
  <div className="card-box-a card-shadow">
    <div className="img-box-a">
      <img src={props.imgSrc} alt="" className="img-a img-fluid"/>
    </div>
    <div className="card-overlay">
      <div className="card-overlay-a-content">
        <div className="card-header-a">
          <h2 className="card-title-a">
            <a href="#">{props.nama}</a>
          </h2>
        </div>
        <div className="card-body-a">
          <div className="price-box d-flex">
            <span className="price-a">Rp. {props.harga}</span>
          </div>
        </div>
        <div className="card-footer-a">
          <ul className="card-info d-flex justify-content-around">
            <li><h4 className="card-info-title">Rp. {props.harga}</h4></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Produk = (props) => (
  <MainLayout>
    <div className="container">
        
        <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Buah</h1>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Kategori
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Buah
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

        <section class="property-grid grid">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="grid-option">
              <form>
                <select class="custom-select">
                  <option selected="">All</option>
                </select>
              </form>
            </div>
          </div>

          <div className="col-md-4">
          <Link href="/kategori/[kode]/[jenis]" as="/kategori/15/Buah" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>

          <CardBuah imgSrc="/img/sayur_home_delivery_anggur_merah_buah_anggur_merah_fresh_bandung_1kg_full01_hdid96re.jpg" nama="Anggur" harga="6.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/16/Buah" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>

          <CardBuah imgSrc="/img/7a3f22c1c1df7cc2c0d36b665d167a9a.jpg" nama="Jeruk" harga="30.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/17/Buah" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>

          <CardBuah imgSrc="/img/duta-buah_pepaya-calina-1-pcs--0-8-1-kg-_full02.jpg" nama="Pepaya" harga="15.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/18/Buah" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>

          <CardBuah imgSrc="/img/manggis.jpg" nama="Manggis" harga="15.000" />
        </div>
          </div>

        <div class="row">
          <div class="col-sm-12">
            <nav class="pagination-a">
              <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">
                    <span class="bi bi-chevron-left"></span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item next">
                  <a class="page-link" href="#">
                    <span class="bi bi-chevron-right"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
    </div>

    </MainLayout>
);

export default Produk;