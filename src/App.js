import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/cart">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
