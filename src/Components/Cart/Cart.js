import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="app__cart">
      <div className="app__cart__left">
        <img
          src="https://image.shutterstock.com/image-photo/amazon-prime-subscription-service-outdoor-600w-1626982810.jpg"
          className="app__cart__left__ad"
          alt="ad"
        ></img>
        <div className="app__cart__left__items">
          <div className="app__cart__left__items__item">
            <div className="app__cart__left__items__item__image">
              <img
                className="app__cart__left__items__item__image__element"
                src="https://images-na.ssl-images-amazon.com/images/I/71UyNLSv2mL._AC_SX679_.jpg"
                alt="product"
              ></img>
            </div>
            <div className="app__cart__left__items__item__details">
              <strong>
                AmazonBasics 48-Count AA High-Performance Alkaline Batteries,
                10-Year Shelf Life, Easy to Open Value Pack
              </strong>
              <p>*****</p>
              <p>
                <strong>12.95$</strong>
              </p>
              <button>Remove From Basket</button>
            </div>
          </div>
        </div>
      </div>
      <div className="app__cart__right">
        <strong>Total items: 5</strong>
        <p>
          Total Price<strong> 500$</strong>
        </p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
