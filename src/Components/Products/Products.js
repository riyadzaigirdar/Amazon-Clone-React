import React from "react";
import "./Products.css";
import Product from "../Product/Product";

function Products() {
  return (
    <div className="app__products">
      <Product
        id={123123123}
        title="Apple AirPods with Wired Charging Case"
        price={114.43}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
      />
      <Product
        id={544236546}
        title="AmazonBasics 48-Count AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
        price={15.49}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/71UyNLSv2mL._AC_SX679_.jpg"
      />
    </div>
  );
}

export default Products;
