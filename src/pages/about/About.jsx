import  Contact  from "./Contact";
import "./About.css";
import Hero from "./Hero";
import Where from "./Where";
import Who from "./Who";
import Why from "./Why";

const About = () => {
    return (
        <div id="about">
			<Hero/>
            <Who/>
            <Why/>
            <Where/>
            <Contact/>
        </div>
    )
};

export default About;