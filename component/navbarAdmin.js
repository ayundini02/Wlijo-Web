import Link from "next/link";
const NavbarAdmin = () => (

    
<header id="header">
<i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle"/>
        <h1 class="text-light"><a href="index.html">Alex Smith</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li>
              <Link href="#hero">
              <a class="nav-link scrollto active">
                  <i class="bx bx-home"></i> 
                  <span>Home</span>
                  </a>
                  </Link>
                  </li>
          <li>
              <Link href="#about">
              <a class="nav-link scrollto">
                  <i class="bx bx-user"></i> 
                  <span>About</span>
                  </a>
                  </Link>
                  </li>
          <li>
              <Link href="#resume">
              <a class="nav-link scrollto">
                  <i class="bx bx-file-blank"></i> 
                  <span>Resume</span>
                  </a>
                  </Link>
                  </li>
          <li>
              <Link href="#portfolio">
              <a class="nav-link scrollto">
                  <i class="bx bx-book-content"></i> 
                  <span>Portfolio</span>
                  </a>
                  </Link>
                  </li>
          <li>
              <Link href="#services">
              <a class="nav-link scrollto">
                  <i class="bx bx-server"></i> 
                  <span>Services</span>
                  </a>
                  </Link>
                  </li>
          <li>
              <Link href="#contact">
              <a class="nav-link scrollto">
                  <i class="bx bx-envelope"></i> 
                  <span>Contact</span>
                  </a>
                  </Link>
                  </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default NavbarAdmin;