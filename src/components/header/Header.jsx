import "./Header.css";
import Burger from "../burger/Burger"
import Navigation from "../navigation/Navigation";

const Header = () =>{
    return (
        <header className="main-header flex flex-between px-80 no-col">
            <div id="logo">ColaMunchies</div>
            <Burger />
            <Navigation />
        </header>
    );
};

export default Header;