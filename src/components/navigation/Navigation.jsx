import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav id="main-nav" className="hiddenmb">
            <ul className="flex nav-list">
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/reviews"}><li>Reviews</li></Link>
                <Link to={"/top-picks"}><li>Top Picks</li></Link>
                <Link to={"/guide"}><li>Guide</li></Link>
                <Link to={"/about"}><li>About</li></Link>
                
            </ul>
        </nav>
    )
}

export default Navigation;