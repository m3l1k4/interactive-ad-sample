import React from "react";
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'

import './App.css';

import Plane from './components/Plane'
import NavBar from './components/NavBar'

class App extends React.Component {


  state ={
    score:[]
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

            <Route exact path="/">
              {/* <Plane /> */}
            </Route>

          </Switch>

        </div>

      </Router>

    )

  }

}

export default App;
