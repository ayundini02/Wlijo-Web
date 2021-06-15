import Banner from "../component/banner";
import MainLayout from "../component/main-layout";
import Widget from "../component/widget";

const Home = (props) => (
    <MainLayout>
    <div className="container">
        <Banner />
        <Widget />
    </div>
    </MainLayout>
);

export default Home;