import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => history.push("/"))
      .catch((e) => alert(e.message));
  };

  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => history.push("/"))
      .catch((e) => alert(e.message));
  };

  return (
    <div className="app__login">
      <div className="app__login__container">
        <div className="app__login__container__fullform">
          <Link to="/">
            <img
              className="app__login__container__fullform__logo"
              src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg"
              alt="logo"
            ></img>
          </Link>
          <form
            onSubmit={login}
            className="app__login__container__fullform__form"
          >
            <div>
              <h3>Email</h3>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="app__login__container__fullform__form__input"
                type="text"
              />
            </div>
            <div>
              <h3>password</h3>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="app__login__container__fullform__form__input"
                type="password"
              />
            </div>
            <div className="app__login__container__fullform__form__checkbox">
              <input type="checkbox" />
              <label className="app__login__container__fullform__form__checkbox__label">
                By continuing, you agree to Amazon's Conditions of Use and
                Privacy Notice.
              </label>
            </div>
            <button
              className="app__login__container__fullform__form__button"
              type="submit"
            >
              Submit
            </button>
          </form>
          <button
            onClick={signup}
            className="app__login__container__fullform__form__button__signup"
          >
            Create Your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
