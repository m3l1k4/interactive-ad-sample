import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Game.scss';

import Plane from '../Plane'

export default function Game() {
    return (
        <div className="Game">
            
                 <Plane />  
            
  
        </div>
    )
}
