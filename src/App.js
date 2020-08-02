import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import useStateValue from "./StateProvider";

function App() {
  const dispatch = useStateValue()[1];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "set_user",
          user: authUser,
        });
      } else {
        dispatch({
          type: "set_user",
          user: null,
        });
      }
      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Products />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
