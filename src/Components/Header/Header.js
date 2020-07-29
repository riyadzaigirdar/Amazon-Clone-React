import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <nav className="app__header" >

            <img className="app__header__logo" src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg"></img>

            <div className="app__header__search">
                <input type="text" className="app__header__search__field" ></input>
                <SearchIcon className="app__header__search__icon" />
            </div>
            <div className="app__header__buttons">
                <Link to='/login' className="app__header__buttons__links">
                    <div className="app__header__buttons__links__button">
                        <span className="app__header__buttons__links__button__upperspan" > hello riyad</span>
                        <span className="app__header__buttons__links__button__lowerspan"> sign in</span>
                    </div>
                </Link>
                <Link to='/signup' className="app__header__buttons__links">
                    <div className="app__header__buttons__links__button">
                        <span className="app__header__buttons__links__button__upperspan" >Return</span>
                        <span className="app__header__buttons__links__button__lowerspan">& Orders</span>
                    </div>
                </Link>
                <Link to='/login' className="app__header__buttons__links">
                    <div className="app__header__buttons__links__button">
                        <span className="app__header__buttons__links__button__upperspan" >your</span>
                        <span className="app__header__buttons__links__button__lowerspan">prime</span>
                    </div>
                </Link>
                <Link to='/cart' className="app__header__buttons__links">
                    <div className="app__header__buttons__links__button">
                        <span className="app__header__buttons__links__button__count">0</span>
                        <span className="app__header__buttons__links__button__basket"><ShoppingBasketIcon /></span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header