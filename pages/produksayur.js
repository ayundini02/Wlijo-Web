import MainLayout from "../component/main-layout";
import Link from "next/link";

const CardSayur = props => (
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
              <h1 class="title-single">Sayur</h1>
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
                  Sayur
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
          <Link href="/kategori/[kode]/[jenis]" as="/kategori/1/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>

          <CardSayur imgSrc="/img/tomat.jpeg" nama="Tomat" harga="7.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/2/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/jagung.jpeg" nama="Jagung" harga="4.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/3/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/sayur_sawi.jpeg" nama="Sayur Sawi" harga="7.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/4/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/kubis.jpeg" nama="Kubis" harga="7.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/5/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/wortel.jpeg" nama="Wortel" harga="9.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/6/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/buncis.jpeg" nama="Buncis" harga="8.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/7/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/bawang_merah.jpeg" nama="Bawang Merah" harga="20.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/8/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/bawang_putih.jpeg" nama="Bawang Putih" harga="22.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/9/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/kentang.jpeg" nama="Kentang" harga="12.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/10/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/labu_siam.jpeg" nama="Labu Siam" harga="7.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/11/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/timun.jpeg" nama="Timun" harga="8.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/12/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/kacang_panjang.jpeg" nama="Kacang Panjang" harga="6.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/13/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/cabe_rawit1.jpeg" nama="Cabe Rawit" harga="8.000" />
        </div>

        <div className="col-md-4">
        <Link href="/kategori/[kode]/[jenis]" as="/kategori/14/Sayur" class="link-a">Click here to view
            </Link>
            <span class="bi bi-chevron-right"></span>
            
          <CardSayur imgSrc="/img/cabe_merah1.jpeg" nama="Cabe Besar" harga="28.000" />
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