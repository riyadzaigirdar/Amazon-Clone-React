import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./Sidemenu.css";
import useStateValue from "../../StateProvider";

function Sidemenu() {
  const { user } = useStateValue()[0];

  return (
    <div className="sidemenu">
      <div className="sidemenu__topbar">
        <PersonIcon className="sidemenu__icons" />
        <span className="text down">
          Hello,
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={!user ? "/login" : ""}
          >
            <span> {user ? user.email : "Sign in"}</span>
          </Link>
        </span>
      </div>
      <div className="sidemenu__menuitems">
        <Link to="/cart" className="sidemenu__link">
          <span className="text">Cart</span>
          <ChevronRightIcon className="sidemenu__icons" />
        </Link>
        {!user && (
          <Link to={!user && "/login"} className="sidemenu__link">
            <span className="text">Login</span>
            <ChevronRightIcon className="sidemenu__icons" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Sidemenu;
