import "./Header.css";
import Burger from "../burger/Burger"
import Navigation from "../navigation/Navigation";

const Header = () =>{
    return (
        <header className="main-header flex flex-between px-80 no-col">
            <div id="logo">ColaMunchies</div>
            {/* link to logo */}
            {/* <NavLink to="/"><img id="logo" src={logo} alt="Cola Mumchies" /></NavLink> */}
            <Burger />
            <Navigation />
        </header>
    );
};

export default Header;