const CardKategori = props => (
  <div className="card-box-c foo">
	  <div className="card-header-c d-flex">
      <div className="card-box-ico"></div>
      <div className="card-title-c align-self-center">
        <h2 className="title-c">{props.kategori}</h2>
      </div>
    </div>
    <div className="card-body-c"></div>
    <div className="card-footer-c">
      <a href="#" class="link-c link-icon">Read more<span class="bi bi-chevron-right"></span></a>
    </div>
  </div>
);

const CardSpecialToday = props => (
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
            <CardKategori kategori="Sayuran" />
          </div>
          <div className="col-md-4">
            <CardKategori kategori="Buah" />
          </div>
          <div className="col-md-4">
            <CardKategori kategori="Lauk-Pauk" />
          </div>
        </div>
      </div>
    </section>

    <section className="section-property section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Special To Day</h2>
              </div>
              <div className="title-link">
                <a href="property-grid.html">All Property
                  <span className="bi bi-chevron-right"></span>
                  </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <CardSpecialToday imgSrc="/img/U1fabdf60ed5f441a876ce00b69452381c.jpg" nama="Wortel" harga="3.000" />
        </div>
        <div className="col-md-4">
          <CardSpecialToday imgSrc="/img/tomaotoes1_560x560.jpg" nama="Tomat" harga="7.000" />
        </div>
        <div className="col-md-4">
          <CardSpecialToday imgSrc="/img/pngtree-non-polluted-ingredients-cabbage-png-image_2380139.jpg" nama="Kubis" harga="7.000" />
        </div>
        <div className="col-md-4">
          <CardSpecialToday imgSrc="/img/Jagung-Manis-Kulit.jpg" nama="Jagung" harga="4.000" />
        </div>
      </div>
    </section>
  </main>
);

export default Widget;
