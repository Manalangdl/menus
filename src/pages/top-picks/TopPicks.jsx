import "./TopPicks.css";
import Menus from "../../components/menus";
import pic from "./menu.webp";

const TopPicks = () => {
    return (
        <div id="top-picks" className="page">
            <h2>Top Picks</h2>
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
                description="Random"/>
        </div>
    )
};

export default TopPicks;