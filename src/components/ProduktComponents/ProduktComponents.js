import "./ProduktComponents.css";

function ProduktComponents(props) {
    return (
        <div className="div">
            <img src={props.src} alt=""></img>
            <h3>{props.product}</h3>
            <p>{props.description}</p>
            <h4>{props.price}</h4>
            <button>BUY NOW</button>
        </div>
    );
}

export default ProduktComponents;