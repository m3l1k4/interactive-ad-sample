import React from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './common-styles/base.scss';
import Nav from './components/Nav';
import Plane from './components/Plane'
// import LandingPage from "./components/LandingPage";
import Data from './components/Data'
import Home from './Home'
import Footer from './components/Footer'
import Game from './components/Game'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/interactive">
            <Game />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    )
  }
}

export default App;
