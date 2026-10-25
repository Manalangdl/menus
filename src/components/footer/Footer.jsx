import "./Footer.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Footer = () =>{
    return(
        <footer id="footer" className="flex flex-between">
           
            <LeftSide/>
            <RightSide/>
        </footer>
    )
};

export default Footer;