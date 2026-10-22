import "./Home.css";
import About from "../about/About";
import Hero from "../../components/hero/Hero";
const Home = () => {
    return (
        <div id="home">
            <Hero />
            <About />
        </div>
    )
};

export default Home;