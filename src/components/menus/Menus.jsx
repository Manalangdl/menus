
import "./Menus.css";
import {useState} from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import FoodDialog from "../food_dialog/FoodDialog";


import Menu from "../../components/menus/Menus";
const Menus = (props) => {  

    const [showDialog, setShowDialog] = useState(false);

    const showDetails = () => {
        setShowDialog(true);
    }

    const hideDetails = () => {
        setShowDialog(false);
    };

   
    return(
        <section className="menus" onClick={showDetails}>
            <h3>{props.title}</h3>
            {showDialog && <FoodDialog
                                    _id={props._id}
                                    title={props.title}
                                    close_dialog={hideDetails}/>}
            <img src={`https/colamunchies_backend.onrender.com/images/${props.src}`} alt= "menu example" />
        </section>
    )
};

export default Menus;