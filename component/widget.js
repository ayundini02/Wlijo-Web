const CardKategori = props => (
  <div className="card-box-c foo">
	  <div className="card-header-c d-flex">
      <div className="card-box-ico">
      <img src={props.imgSrc}/>
      </div>

      <div className="card-title-c align-self-center">
        <h2 className="title-c">{props.kategori}</h2>
      </div>
    </div>
    <div className="card-body-c"></div>
    <div className="card-footer-c">
    </div>
  </div>
);

const CardAllProduk = props => (
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

const Widget = () => (
  <main id="main">
    <section className="section-property section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Kategori</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          <CardKategori imgSrc="/img/135715.png" kategori="Sayuran"/>
          <a href="/produksayur" className="link-c link-icon">Read more<span className="bi bi-chevron-right"></span></a>
          </div>

          <div className="col-md-4">
          <CardKategori imgSrc="/img/peach-37629_960_720.png" kategori="Buah"/>
          <a href="/produkbuah" className="link-c link-icon">Read more<span className="bi bi-chevron-right"></span></a>
          </div>

          <div className="col-md-4">
          <CardKategori imgSrc="/img/lauk-icon.png" kategori="Lauk-Pauk"/>
          <a href="/produklaukpauk" className="link-c link-icon">Read more<span className="bi bi-chevron-right"></span></a>
          </div>
        </div>
        </div>
        </section>

        <section class="section-t8 property-grid grid">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Produk</h2>
              </div>
              <div class="title-link">
                <a href="#">All Produk
                  <span class="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
          <CardAllProduk imgSrc="/img/tomat.jpeg" nama="Tomat" harga="7.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/jagung.jpeg" nama="Jagung" harga="4.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/sayur_sawi.jpeg" nama="Sayur Sawi" harga="7.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/kubis.jpeg" nama="Kubis" harga="7.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/wortel.jpeg" nama="Wortel" harga="9.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/buncis.jpeg" nama="Buncis" harga="8.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/bawang_merah.jpeg" nama="Bawang Merah" harga="20.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/bawang_putih.jpeg" nama="Bawang Putih" harga="22.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/kentang.jpeg" nama="Kentang" harga="12.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/labu_siam.jpeg" nama="Labu Siam" harga="7.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/timun.jpeg" nama="Timun" harga="8.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/kacang_panjang.jpeg" nama="Kacang Panjang" harga="6.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/cabe_rawit1.jpeg" nama="Cabe Rawit" harga="8.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/cabe_merah1.jpeg" nama="Cabe Besar" harga="28.000" />
        </div>
        <div className="col-md-4">
        </div>

        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/sayur_home_delivery_anggur_merah_buah_anggur_merah_fresh_bandung_1kg_full01_hdid96re.jpg" nama="Anggur" harga="6.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/7a3f22c1c1df7cc2c0d36b665d167a9a.jpg" nama="Jeruk" harga="30.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/duta-buah_pepaya-calina-1-pcs--0-8-1-kg-_full02.jpg" nama="Pepaya" harga="15.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/manggis.jpg" nama="Manggis" harga="15.000" />
        </div>

        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/tempe.jpg" nama="Tempe" harga="5.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/158630258503416_668c706e-427d-4f3b-a5a9-ecbff44995d9.jpg" nama="Tahu" harga="3.000" />
        </div>
        <div className="col-md-4">
          <CardAllProduk imgSrc="/img/product-image.jpg" nama="Telur" harga="40.000" />
        </div>

      </div>
      </div>
    </section>
        </main>

);

export default Widget;