import React from 'react'
import './Products.css'

function Products() {
    return (
        <div className="app__products">
            <div className="app__products__product">
                <h4>Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver
by Acer</h4>
                <p>price</p>
                <div>★★★★★</div>
                <img className="app__products__product__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" alt=""></img>
                <button className="app__products__product__button">add to cart</button>
            </div>
            <div className="app__products__product">
                <h4>AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler</h4>
                <p>price</p>
                <div>★★★★★</div>
                <img className="app__products__product__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" alt=""></img>
                <button className="app__products__product__button">add to cart</button>
            </div>
            <div className="app__products__product">
                <h4>HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black</h4>
                <p>price</p>
                <div>★★★★★</div>
                <img className="app__products__product__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" alt=""></img>
                <button className="app__products__product__button">add to cart</button>
            </div>
            <div className="app__products__product">
                <h4>title of the product</h4>
                <p>price</p>
                <div>★★★★★</div>
                <img className="app__products__product__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" alt=""></img>
                <button className="app__products__product__button">add to cart</button>
            </div>
            <div className="app__products__product">
                <h4>title of the product</h4>
                <p>price</p>
                <div>★★★★★</div>
                <img className="app__products__product__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" alt=""></img>
                <button className="app__products__product__button">add to cart</button>
            </div>
        </div>
    )
}

export default Products