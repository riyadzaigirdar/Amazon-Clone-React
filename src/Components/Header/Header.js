import React, { useEffect, useState, useCallback } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { animated, useTransition } from "react-spring";
import { Link } from "react-router-dom";
import "./Header.css";
import Sidemenu from "../Sidemenu/Sidemenu";
import useStateValue from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const state = useStateValue()[0];
  const [showcollapsebar, setShowCollapseBar] = useState(
    window.innerWidth < 700
  );
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    auth.signOut();
  };
  const handlecollapsebar = useCallback(() => {
    if (window.innerWidth < 700) {
      setShowCollapseBar(true);
      setShowMenu(false);
    } else {
      setShowCollapseBar(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handlecollapsebar);
    return () => {
      window.removeEventListener("resize", handlecollapsebar);
    };
  }, [handlecollapsebar]);

  const menuTransition = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translate(-70%)" },
    enter: { opacity: 1, transform: "translate(0%)" },
    leave: { opacity: 0, transform: "translate(-70%)" },
  });

  const menuBackgroundTransition = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translate(100%)" },
    enter: { opacity: 0.5, transform: "translate(70%)" },
    leave: { opacity: 0, transform: "translate(100%)" },
  });

  return (
    <nav className="app__header">
      <Link to="/">
        <img
          className="app__header__logo"
          src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg"
          alt="amazon"
        ></img>
      </Link>
      <div className="app__header__search">
        <input type="text" className="app__header__search__field"></input>
        <SearchIcon className="app__header__search__icon" />
      </div>

      {!showcollapsebar && (
        <div className="app__header__buttons">
          <Link
            to={!state.user && "/login"}
            className="app__header__buttons__links"
          >
            <div
              onClick={state.user && logout}
              className="app__header__buttons__links__button"
            >
              <span className="app__header__buttons__links__button__upperspan">
                {" "}
                {state.user ? `hello ${state.user.email}` : "Welcome"}
              </span>
              <span className="app__header__buttons__links__button__lowerspan">
                {" "}
                {!state.user ? "Sign in" : "logout"}
              </span>
            </div>
          </Link>
          <Link to="/signup" className="app__header__buttons__links">
            <div className="app__header__buttons__links__button">
              <span className="app__header__buttons__links__button__upperspan">
                Return
              </span>
              <span className="app__header__buttons__links__button__lowerspan">
                & Orders
              </span>
            </div>
          </Link>
          <Link to="/" className="app__header__buttons__links">
            <div className="app__header__buttons__links__button">
              <span className="app__header__buttons__links__button__upperspan">
                your
              </span>
              <span className="app__header__buttons__links__button__lowerspan">
                prime
              </span>
            </div>
          </Link>
          <Link to="/cart" className="app__header__buttons__links">
            <div className="app__header__buttons__links__button">
              <span className="app__header__buttons__links__button__count">
                {state.basket.length}
              </span>
              <span className="app__header__buttons__links__button__basket">
                <ShoppingBasketIcon />
              </span>
            </div>
          </Link>
        </div>
      )}
      {showcollapsebar && (
        <div
          className="app__header__buttons"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="app__header__buttons__links__collapsebar">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      )}
      {menuTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className="menuLeft">
              <Sidemenu />
            </animated.div>
          )
      )}

      {menuBackgroundTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="menuRight"
              onClick={() => {
                setShowMenu(false);
              }}
            ></animated.div>
          )
      )}
    </nav>
  );
}

export default Header;
