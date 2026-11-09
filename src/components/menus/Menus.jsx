import "./Menus.css";

const Menus = (props) => {
    return(
        <section className="menus">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {/* instead of using img src {"..."} */}
            <img src={`https/colamunchies_backend.onrender.com/images/${props.src}`} alt= "menu example" />
        </section>
    )
};

export default Menus;