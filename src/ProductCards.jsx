import React from "react";

const ProductCard = ({products})=>{
    let price = products.price * 0.01;
    return(
        <article className="card">
            <img src={products.imageUrl} width='100%' alt={products.name}/>
            <h3>{products.name}</h3>
            <div className="container">
                <p>{products.description}</p>
            </div>
            <footer>
                <b>${price.toFixed(2)} CAD</b>
            </footer>
        </article>
    );
}

export default ProductCard;