import MainLayout from "../../component/main-layout";
import listProduk from "../../component/dataWlijo/listBuah.json";
import Link from "next/link";

export async function getServerSideProps(context) {
  return {
      props: { listProduk },
  };
}

const Card =(props) => (
  <div className="card-box-a card-shadow">
    <div className="img-box-a">
      <img src={props.img} alt="" className="img-a img-fluid" />
    </div>
    <div className="card-overlay">
      <div className="card-overlay-a-content">
        <div className="card-header-a">
          <h2 className="card-title-a">
            <a href="#">{props.name}</a>
          </h2>
        </div>
        <div className="card-body-a">
          <div className="price-box d-flex">
            <span className="price-a">Rp. {props.hrg}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  
);

const List = (props) => (
  <MainLayout>
    <div className="container">

        <section className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">{proud.jenis}</h1>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Kategori
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Sayur
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

        <section className="property-grid grid">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="grid-option">
              <form>
                <select className="custom-select">
                  <option selected="">All</option>
                </select>
              </form>
            </div>
          </div>

          {props.listProduk.map((proud)=>(
            <div className="col-md-4">
              <div className="link-a">{proud.id}
              <Link href="/kategori/[kode]/[jenis]"
               as={`/kategori/${proud.id}/${proud.nama.replace(/\s+/g, "-")
               .toLowerCase()}`}>
                 <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse">
                   Detail&nbsp;{proud.nama}
                   </button>
                   </Link>
            <Card 
            id={proud.id}
            jenis={proud.jenis}
            img={proud.gambar} 
            name={proud.nama}
            hrg={proud.harga}
            />
            </div>
          </div>
          ))}
      </div>

        <div className="row">
          <div className="col-sm-12">
            <nav className="pagination-a">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabindex="-1">
                    <span className="bi bi-chevron-left"></span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item next">
                  <a className="page-link" href="#">
                    <span className="bi bi-chevron-right"></span>
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

export default List;

