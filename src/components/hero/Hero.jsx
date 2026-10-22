import "./Hero.css";
import food from "./images/food.jpg"

const Hero = () => {
    return (
        <section id="hero">
            <img src={food} alt="food layout" />
        </section>
    )
};

export default Hero;