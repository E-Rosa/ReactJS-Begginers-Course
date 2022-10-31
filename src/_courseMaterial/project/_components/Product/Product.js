import "./Product.css";

function ProductComp(props){
    return(
        <div className="Product">
            <div className="product-headlines-container">
                <img src={props.imgSrc} className="product-image" alt={props.title}></img>
                <div className="product-data-container">
                    <span className="product-title">{props.title}</span>
                    <span className="product-code">Product Code: {props.code}</span>
                </div>
            </div>
            <select className="size-select" defaultValue={props.size}>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
            </select>
            <div className="counter-container">
                <button className="counter-button" onClick={props.subCounterClick} id={props.id}>-</button>
                <span className="counter-number">{props.count}</span>
                <button className="counter-button" onClick={props.addCounterClick} id={props.id}>+</button>
            </div>
            <button className="remove-button" onClick={props.removeClick} id={props.id}>x</button>
            <span className="price-tag">${props.price}</span>
        </div>
    )
}

export default ProductComp;