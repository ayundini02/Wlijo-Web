import Head from "next/head";
import "../styles/fontawesome-free-5.15.3-web/css/all.min.css";
import "../../public/admin/css/style.css";

function MyApp({ Component, pageProps }) {
  return(
    <>

    <Head>
      <meta charset="utf-8"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

  <title>Admin Wlijo</title>
  <meta content="" name="description"/>
  <meta content="" name="keywords"/>

  <link href="/admin/img/favicon.png" rel="icon"/>
  <link href="/admin/img/apple-touch-icon.png" rel="apple-touch-icon"/>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

  <link href="/admin/vendor/aos/aos.css" rel="stylesheet"/>
  <link href="/admin/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="/admin/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
  <link href="/admin/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
  <link href="/admin/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
  <link href="/admin/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>

  <link href="/admin/css/style.css" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
      </>
  );
    }


export default MyApp;