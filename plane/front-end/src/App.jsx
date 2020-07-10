import React from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './common-styles/base.scss';
import Nav from './components/Nav';
import Plane from './components/Plane'
import LandingPage from "./components/LandingPage";
import Data from './components/Data'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/interactive">
            <Plane />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
