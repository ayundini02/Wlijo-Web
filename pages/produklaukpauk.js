import MainLayout from "../component/main-layout";
import Link from "next/link";

const CardLaukPauk = props => (
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
              <h1 class="title-single">Lauk-Pauk</h1>
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
                  Lauk Pauk
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
          <Link href="/kategori/[kode]/[jenis]" as="/kategori/19/LaukPauk" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>

          <CardLaukPauk imgSrc="/img/tempe.jpg" nama="Tempe" harga="5.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/20/LaukPauk" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>

          <CardLaukPauk imgSrc="/img/158630258503416_668c706e-427d-4f3b-a5a9-ecbff44995d9.jpg" nama="Tahu" harga="3.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/21/LaukPauk" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>

          <CardLaukPauk imgSrc="/img/product-image.jpg" nama="Telur" harga="40.000" />
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