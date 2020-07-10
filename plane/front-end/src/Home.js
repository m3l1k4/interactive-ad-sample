import React from "react";
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'
import  Hero from './components/Hero'
import Info from './components/Info'
class App extends React.Component {
  render() {
    return (


      <div className="App">

        <Hero/>
        <Info/>
      </div>

    );
  }

}

export default App;