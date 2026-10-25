import "./Home.css";
import Hero from "./Hero";
import Cravings from "./Cravings";
import Guide from "./Guide";
import About from "./About";

const Home = () => {
    return (
        <div id="home">
            <Hero />
            <Cravings />
            <Guide />
            <About />

        </div>
    )
};

export default Home;