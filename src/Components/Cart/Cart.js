import React from "react";
import "./Cart.css";
import useStateValue from "../../StateProvider";
import { getTotal } from "../../reducer";

function Cart() {
  const [state, dispatch] = useStateValue();

  const handleRemove = (id) => {
    dispatch({
      type: "remove_from_cart",
      id,
    });
  };

  const handleIncrease = (item) => {
    dispatch({
      type: "add_to_cart",
      item,
    });
  };
  return (
    <div className="app__cart">
      <div className="app__cart__left">
        <img
          src="https://image.shutterstock.com/image-photo/amazon-prime-subscription-service-outdoor-600w-1626982810.jpg"
          className="app__cart__left__ad"
          alt="ad"
        ></img>
        {state.basket.length ? (
          state.basket.map((item, index) => {
            console.log(item);
            return (
              <div key={index} className="app__cart__left__items">
                <div className="app__cart__left__items__item">
                  <div className="app__cart__left__items__item__image">
                    <img
                      className="app__cart__left__items__item__image__element"
                      src={item.image}
                      alt="product"
                    ></img>
                  </div>
                  <div className="app__cart__left__items__item__details">
                    <strong>
                      {item.count} X {item.title}
                    </strong>
                    <p>
                      {Array(item.rating)
                        .fill()
                        .map((_) => "*")}
                    </p>
                    <p>
                      <strong>{item.price}$</strong>
                    </p>
                    <button
                      className="app__cart__left__items__item__details__removebutton"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove From Basket
                    </button>
                    <button
                      className="app__cart__left__items__item__details__increasebutton"
                      onClick={() => handleIncrease(item)}
                    >
                      Add Another On Basket
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No items in the cart</h1>
        )}
      </div>
      {state.basket.length !== 0 && (
        <div className="app__cart__right">
          <strong>Total items: {state.basket.length}</strong>
          <p>
            Total Price<strong> {getTotal(state.basket)}$</strong>
          </p>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
