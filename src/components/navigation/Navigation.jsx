import "./Navigation.css";
import {useState} from "react";
import {NavLink} from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <nav id="main-nav" className="hiddenmb">
            <a id="toggle-nav" onClick={toggleNav} href="#">
                {menuOpen?(<p>&#8963;</p>):(<p>&#8964;</p>)}
            </a>

            {/* added hide-small in class */}
            {/* <ul className="flex nav-list"> */}
            <ul className={menuOpen?"":"hide-small"}>
                
                {/* Hashlink used for a componenet of page */}
                {/* <li><HashLink to="/#about">About</HashLink></li> */}
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
                <li><NavLink to="/top-picks">Top Picks</NavLink></li>
                <li><NavLink to="/guide">Guide</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>

            </ul>
        </nav>
    )
}

export default Navigation;