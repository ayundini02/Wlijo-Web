import Link from "next/link";
const NavBar = () => (

  <nav className="navbar navbar-default navbar-expand-lg fixed-top navbar-trans">
    <div className="container">
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a className="navbar-brand text-brand" href="index.html"><span className="color-b">Wlijo</span></a>

      <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link href="/home">
              <a className="nav-link active">Home</a>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kategori</a>
            <div className="dropdown-menu">

              <Link href="/produksayur/sayur" className="nav-item dropdown">
                <a className="dropdown-item">Sayur</a>
              </Link>

              <Link href="/produkbuah/buah">
                <a className="dropdown-item">Buah</a>
              </Link>

              <Link href="/produklaukpauk/laukpauk">
                <a className="dropdown-item">Lauk Pauk</a>
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
      </div>

      <Link href="#">
        <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
          <i className="bi bi-cart"></i>
        </button>
      </Link>
      &nbsp;
      <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
        <i className="bi bi-search"></i>
      </button>

      <div class="dropdown">
        <button disabled="" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown">
          <i class="bi bi-person"></i>
        </button>
        <ul class="dropdown-menu" id="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <Link href="/admin/loginAdmin">
              <button class="dropdown-item" type="button">Admin</button>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  </nav>

);

export default NavBar;