import "./Header.css";
import Burger from "../burger/Burger"
import Navigation from "../navigation/Navigation";
import Aside from "../aside/Aside";
import { useState } from "react";

const Header = () =>{

    const [mbMenu, setMbMenu] = useState(false);

    return (

        <>
            <Aside mbMenu={mbMenu} setMbMenu={setMbMenu} />

            <header className="main-header flex flex-between px-80 no-col">
                <div id="logo">ColaMunchies</div>
                {/* link to logo */}
                {/* <NavLink to="/"><img id="logo" src={logo} alt="Cola Mumchies" /></NavLink> */}
                <Burger setMbMenu={setMbMenu} />
                <Navigation />
            </header>

        </>
    );
};

export default Header;