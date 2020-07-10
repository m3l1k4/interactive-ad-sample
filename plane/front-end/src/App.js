import React from "react";
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'

import './App.css';

import Plane from './components/Plane'

class App extends React.Component {

  render() {

    return (

      <Router>
        <div className="App">

          <Switch>

            <Route exact path="/">
              <Plane />
            </Route>

          </Switch>

        </div>

      </Router>

    )

  }

}

export default App;
