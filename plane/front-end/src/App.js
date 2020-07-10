import React from "react";
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'

import './App.css';

import Plane from './components/Plane'
import NavBar from './components/NavBar'
// import LandingPage from './LandingPage'
import Home from './Home'

class App extends React.Component {


  state = {
    score: []
  }



  //   handleScore = (event) => {


  //     this.setState({

  //         }]
  //     })



  // }



  render() {

    return (

      <Router>
        <div className="App">
          <NavBar />
          <Switch>

            <Home />



          </Switch>
        </div>

      </Router>

    )

  }

}

export default App;
