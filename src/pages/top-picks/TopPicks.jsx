import "./TopPicks.css";
import Menus from "../../components/menus/Menus";
import pic from "./menu.webp";
import Hero from "./Hero";
import Search from "./Search"
import Picks from "./Picks";

const TopPicks = () => {
    return (
        <div id="top-picks" className="page">
            {/* <h2>Top Picks</h2>
            <Menus 
                title="Latino"
                description="Latinx and hispanic food"
                src={pic} />
            <Menus 
                title="Asian"
                description="Asian cuisine"/>
            <Menus 
                title="Southern"
                description="Food from the South"/>
            <Menus 
                title="Budget"
                description="Lower price end"/>
            <Menus 
                title="Italian"
                description="Food from Italy"/>
            <Menus 
                title="Other"
                description="Random"/> */}

            <Hero/>
            <Search/>
            <Picks/>
        </div>
    )
};

export default TopPicks;