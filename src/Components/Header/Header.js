import React, { useEffect, useState, useCallback } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { animated, useTransition } from 'react-spring'
import { Link } from 'react-router-dom'
import './Header.css'
import Sidemenu from '../Sidemenu/Sidemenu';



function Header() {
    const [showcollapsebar, setShowCollapseBar] = useState(window.innerWidth < 700)
    const [showMenu, setShowMenu] = useState(false)

    const handlecollapsebar = useCallback(() => {

        if (window.innerWidth < 700) {
            setShowCollapseBar(true)
            setShowMenu(false)
        } else {
            setShowCollapseBar(false)
        }
    }, [])


    useEffect(() => {
        window.addEventListener('resize', handlecollapsebar)
        return () => {
            window.removeEventListener('resize', handlecollapsebar)

        }
    }, [handlecollapsebar])

    const menuTransition = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translate(-70%)' },
        enter: { opacity: 1, transform: 'translate(0%)' },
        leave: { opacity: 0, transform: 'translate(-70%)' },
    })

    const menuBackgroundTransition = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translate(100%)' },
        enter: { opacity: 0.5, transform: 'translate(70%)' },
        leave: { opacity: 0, transform: 'translate(100%)' },
    })

    return (
        <nav className="app__header" >

            <img className="app__header__logo" src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg" alt="amazon"></img>

            <div className="app__header__search">
                <input type="text" className="app__header__search__field" ></input>
                <SearchIcon className="app__header__search__icon" />
            </div>


            {!showcollapsebar && (
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
                    <Link to='/' className="app__header__buttons__links">
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
            )
            }
            {showcollapsebar && (
                <div className="app__header__buttons">
                    <div className="app__header__buttons__links__collapsebar">
                        <FontAwesomeIcon onClick={() => setShowMenu(!showMenu)} icon={faBars} />
                    </div>
                </div>

            )
            }
            {menuTransition.map(({ item, key, props }) =>
                item && <animated.div
                    key={key}
                    style={props}
                    className="menuLeft"
                >
                    <Sidemenu />
                </animated.div>
            )}

            {menuBackgroundTransition.map(({ item, key, props }) =>
                item && <animated.div
                    key={key}
                    style={props}
                    className="menuRight"
                    onClick={() => { setShowMenu(false) }}
                >

                </animated.div>
            )}



        </nav>
    )
}

export default Header