const CardDetail = props => (
  <main id="main">
    <section class="property-single nav-arrow-b">
      <div class="container">
        <div class="row justify-content-center">
            <div id="property-single-carousel" class="swiper-container">
              <div class="swiper-wrapper">
                <div class="carousel-item-b swiper-slide">
                  <img src={props.imgSrc} alt=""/>
                </div>
              </div>
            </div>
            <div class="property-single-carousel-pagination carousel-pagination"></div>
          </div>

        <div class="row">
          <div class="col-sm-12">

            <div class="row justify-content-between">
              <div class="col-md-5 col-lg-4">
                <div class="property-price d-flex justify-content-center foo">
                  <div class="card-header-c d-flex">
                    <div class="card-box-ico">
                      <span class="bi bi-cash">$</span>
                    </div>
                    <div class="card-title-c align-self-center">
                      <h5 class="title-c">{props.harga}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-lg-7 section-md-t3">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d">Property Description</h3>
                    </div>
                  </div>
                </div>
                <div class="property-description">
                  <p class="description color-text-a">
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
);

const Detail = () => (
  <div class="col-lg-8">
    <CardDetail imgSrc="/img/tomat.jpeg" nama="Tomat" harga="7.000" dekripsi="Ini adalah produk Tomat"/>
  </div>
);

export default Detail;