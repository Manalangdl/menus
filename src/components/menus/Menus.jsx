import "./Menus.css";

const Menus = (props) => {
    return(
        <section className="menus">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img src={props.src} alt="menu example" />
        </section>
    )
};

export default Menus;