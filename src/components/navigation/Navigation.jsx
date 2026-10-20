import "./Navigation.css";
import {NavLink} from "react-router-dom";
import {HashLink} from "react-router-dom";

const Navigation = () => {
    return(
        <nav id="main-nav" className="hiddenmb">
            <ul className="flex nav-list">
                <ul>
                    {/* Hashlink used for a componenet of page */}
                    {/* <li><HashLink to="/#about">About</HashLink></li> */}
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/reviews">Reviews</NavLink></li>
                    <li><NavLink to="/top-picks">Top Picks</NavLink></li>
                    <li><NavLink to="/guide">Guide</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>

                </ul>
                
            </ul>
        </nav>
    )
}

export default Navigation;