import "./TopPicks.css";
import Hero from "./Hero";
import Search from "./Search"
import Picks from "./Picks";
import axios from "axios";
import {useState, useEffect } from "react";


import Menu from "../../components/menus/Menus";
const TopPicks = () => {

     // CREATED PENDING 11/10
    const [menus, setMenus] = useState([]);
    const [pending, setPending] = useState(true);

    // after page has loaded
    useEffect(()=>{
        const loadMenus = async()=>{
            const response = await axios.get(`${API_BASE_URL}/api/menus/`);
            setPending(false);
            setMenus(response.data);
        };
        loadMenus();
    })
    // ^ new
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