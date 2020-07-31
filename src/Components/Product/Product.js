import React from "react";
import "./Product.css";
import "../Products/Products.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div className="app__products__product">
      <h4>{title}</h4>
      <p>{price}</p>
      <div>
        {Array(rating)
          .fill()
          .map((_) => "*")}
      </div>
      <img
        className="app__products__product__image"
        src={image}
        alt={`product ${id}`}
      ></img>
      <button className="app__products__product__button">add to cart</button>
    </div>
  );
}

export default Product;
