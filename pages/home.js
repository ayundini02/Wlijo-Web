import Banner from "../component/banner";
import Footer from "../component/footer";
import NavBar from "../component/navbar";
import Widget from "../component/widget";

const Home = (props) => (
    <div className="container">
        <NavBar />
        <Banner />
        <Widget />
        <Footer />
    </div>
);

export default Home;