import "./Navigation.css";

const Navigation = () => {
    return(
        <nav id="main-nav" className="hiddenmb">
            <ul className="flex nav-list">
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Reviews</li></a>
                <a href="#"><li>Top Picks</li></a>
                <a href="#"><li>Guide</li></a>
                <a href="#"><li>About</li></a>
            </ul>
        </nav>
    )
}

export default Navigation;