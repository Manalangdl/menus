import "./TopPicks.css";
import Hero from "./Hero";
import Search from "./Search"
import Picks from "./Picks";
import axios from "axios";
import { useState, useEffect } from "react";

import Menu from "../../components/menus/Menus";
const TopPicks = () => {

    // after the page has loaded
    // useEffect(()=>{
    //     const loadMenus = async()=>{
    //         const response = await axios.get("https://colamunchies_backend.on.render.com/api/menus/")
    //         setMenus(response.data);
    //     };
    //     loadMenus();
    // },[]);
    const [menus, setMenus] = useState([1,1,4]);
    return (
        <div id="top-picks" className="page">
            {/* {menus.map((menus)=>(
                <Menu
                // based on the index.js from backend (api 'menus')
                title={menus.name}
                description="Food"
                src={menus.main_image}/>
            ))} */}
            <Hero/>
            <Search/>
            <Picks/>
            
        </div>
    )
};

export default TopPicks;